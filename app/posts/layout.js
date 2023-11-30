import {use} from 'react'
import Link from "next/link";
async function getPosts() {
    let posts = fetch('https://dummyjson.com/posts?limit=3');

    return (await posts).json();
}
export default function Layout({children}) {
    let {posts} = use(getPosts());
    console.log(posts);

    return <div>
        <ul>
            {posts.map((p) => (
                <li key={p.id}>
                    <Link href={`/posts/${p.id}`}>{p.title}</Link>
                </li>
            ))}
        </ul>
        <div>{children}</div>
    </div>
}