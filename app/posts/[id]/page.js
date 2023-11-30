import { use } from 'react'

async function getPost(id){
    let post = fetch(`https://dummyjson.com/posts/${id}`);

    return (await post).json();
}
export default function Page({params}){
    let id = params.id;
    let post = use(getPost(id));

    return <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
}