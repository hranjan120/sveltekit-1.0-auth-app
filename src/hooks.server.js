// @ts-nocheck

export const handle = async ({ event, resolve }) => {
    // get cookies from browser
    const sessionJwt = event.cookies.get('sveltekiJwt')
    if (!sessionJwt) {
        return await resolve(event)
    }

    const tokenPayload = JSON.parse(Buffer.from(sessionJwt.split('.')[1], 'base64').toString())

    if (tokenPayload && tokenPayload.email) {
        event.locals.userDetail = {
            email: tokenPayload.email,
            id: tokenPayload._id,
        }
    }
    // load page as normal
    return await resolve(event)
}
