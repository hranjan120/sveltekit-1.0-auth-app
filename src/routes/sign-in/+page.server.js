// @ts-nocheck
// import { invalid, redirect } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
export const load = async ({ locals }) => {
    // redirect user if logged in
    //console.log(locals);
    if (locals.userDetail) {
        throw redirect(302, '/')
    }
}

export const actions = {
    login: async (event) => {
        console.log('event of login called', event);
        // TODO log the user in
    },
    setCookie: async ({ cookies, request }) => {
        const data = await request.formData()
        const toks = data.get('tok');
        //console.log(process.env.NODE_ENV);
        cookies.set('sveltekiJwt', toks, {
            // send cookie for every page
            path: '/',
            httpOnly: true,
            // only requests from same site can send cookies
            // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
            sameSite: 'strict',
            // only sent over HTTPS in production
            secure: process.env.NODE_ENV === 'production',
            // set cookie to expire after a month
            maxAge: 60 * 60 * 24 * 30
        });
    }
};