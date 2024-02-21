import { useState } from "react";
export function Likebtn()
{
    let [isLiked, setisLiked] = useState(false);
    let toggleHeart = () => {
        setisLiked(!isLiked);
        console.log('heart clicked', isLiked);<i class="fa-solid fa-heart" style="color: #f40b0b;"></i>
    }
    return(
        <div>
            <h2>Press the heart icon if you liked this post.  
            <i onClick={toggleHeart} 
              className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              style={isLiked ? {color: "#f40b0b"} : {}}
            >
            
            </i>
            </h2>
        </div>
    );
}