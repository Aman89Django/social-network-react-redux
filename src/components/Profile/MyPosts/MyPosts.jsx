import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postElements = props.posts.map(p => <Post like={p.likesCount} message={p.post}/>);

    const newPostElement = React.createRef();
    const addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>

            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
};


export default MyPosts;


