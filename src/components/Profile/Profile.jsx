import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const postsData = [
    {id: 1, post: "Hi! how are you?", likesCount: 12},
    {id: 2, post: "It's my first post!", likesCount: 7},
    {id: 3, post: "It's awesome!", likesCount:25 },
];

const Profile = (props) => {
    return(
    <div>
        <ProfileInfo />

        <MyPosts postsData={postsData}/>


    </div>

    )
};

export default  Profile;