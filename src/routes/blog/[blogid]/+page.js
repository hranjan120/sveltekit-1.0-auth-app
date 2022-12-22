// @ts-nocheck
export async function load({ fetch, params }) {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}`);
    const data = await res.json();
    if (res.ok) {
        return {
            postDetail: data
        };
    }

}