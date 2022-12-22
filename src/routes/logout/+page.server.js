// @ts-nocheck
import { redirect } from '@sveltejs/kit'

export const load = async () => {
    throw redirect(302, '/')
}

export const actions = {
    default({ cookies }) {
        cookies.set('sveltekiJwt', '', {
            path: '/',
            expires: new Date(0),
        })
        // redirect the user
        //throw redirect(302, '/login')
    },
}