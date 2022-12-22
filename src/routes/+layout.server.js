// @ts-nocheck
export const load = async ({ locals }) => {
    return {
        userSession: locals.userDetail
    };
};
