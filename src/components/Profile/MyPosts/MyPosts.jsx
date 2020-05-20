import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postsData} from '../../../index'

const MyPosts = () => {

console.log(postsData.post);


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


