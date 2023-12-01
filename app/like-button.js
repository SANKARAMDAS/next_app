'use client'
import { useState} from "react";

export default function LikeButton(){
    let [isLiked, setLiked] = useState(false);
    return (<div>
        <button onClick={()=> setLiked(!isLiked)}>{isLiked? 'Unliked' : 'Like'}</button>
    </div>)
}