import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return(
    <div>
        <ProfileInfo />

        <MyPosts posts={props.profilePage.posts}


                 dispatch = {props.dispatch}
                 // addPost={props.addPost}
                 // updateNewPostText={props.updateNewPostText}
                 newPostText={props.profilePage.newPostText}
        />

    </div>

    )
};

export default  Profile;