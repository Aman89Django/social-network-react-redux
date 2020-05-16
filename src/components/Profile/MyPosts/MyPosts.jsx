import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return(
    <div>
        <div>
            <textarea />
            <button>Add post</button>
        </div>

        <div className={s.posts}>
            <Post like="5" message="Hi, how are you?" />
            <Post like="7" message="It's my first post" />
        </div>

    </div>
    )
}




export default MyPosts;


