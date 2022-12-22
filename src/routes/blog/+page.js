// @ts-ignore
export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    if (res.ok) {
        return {
            postData: data
        };
    }
    return {
        status: res.status,
        error: new Error('Could not fetch the Posts')
    };
}