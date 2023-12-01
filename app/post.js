import LikeButton from "@/app/like-button";
export default function Post({ data }) {
    let {title, body, id} = data;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <LikeButton />
        </div>
    );
}