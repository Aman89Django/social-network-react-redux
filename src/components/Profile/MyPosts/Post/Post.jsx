import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    console.log(props.message);

    return(
    <div className={s.item}>
        <img src="https://www.trendsmap.com/ipx/https://pbs.twimg.com/profile_images/926488420645523456/hwKSfqNj.jpg" alt="avatar"/>
        <p>post 1</p>
        {props.message}
    </div>
    )
}




export default Post;


