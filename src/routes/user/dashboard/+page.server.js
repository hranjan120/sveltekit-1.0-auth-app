// @ts-nocheck
import { redirect } from '@sveltejs/kit'
export const load = async ({ locals }) => {
    // redirect user if logged in
    //console.log(locals);
    if (!locals.userDetail) {
        throw redirect(302, '/')
    }
}
