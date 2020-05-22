import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



<<<<<<< HEAD
const Profile = () => {


=======
const Profile = (props) => {
>>>>>>> right_way
    return(
    <div>
        <ProfileInfo />

        <MyPosts postsData={props.postsData}/>


    </div>

    )
};

export default  Profile;