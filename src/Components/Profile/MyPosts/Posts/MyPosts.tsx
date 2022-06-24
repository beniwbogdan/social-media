import React from 'react';
import "./MyPosts.module.css"

const mp={
    "posts":" .MyPosts_posts__2UPfV",
    "item":"MyPosts_item__MIc0B"
}
const MyPosts = () => {
    return (
       <div>
           <div className={mp.posts}>
               My posts
               <div>
                   <textarea></textarea>
                   <button>Add post</button>
               </div>
           </div>
           <div className={mp.item}>
               <div>Post 1</div>
               <div>Post 2</div>
           </div>
       </div>
    );
};

export default MyPosts;