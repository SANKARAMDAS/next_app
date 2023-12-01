import Post from "@/app/post";
async function getData() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts');

    return (await req).json();
}
export default async function Posts() {
    let posts = await getData();
    return <div>
        {posts.map((p) => (
            <Post key={p.id} data={p} />
        ))}
    </div>
}