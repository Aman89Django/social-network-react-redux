import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {


    const postsData = [
        {id: 1, post: "Hi! how are you?", likesCount: 12},
        {id: 2, post: "It's my first post!", likesCount: 7},
        {id: 3, post: "It's awesome!", likesCount:25 },
    ];

    const postElements = postsData.map(p => <Post like={p.likesCount} message={p.post}/>);


    return(
    <div>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>

        <div className={s.posts}>
            {postElements}
        </div>

    </div>
    )
}




export default MyPosts;


