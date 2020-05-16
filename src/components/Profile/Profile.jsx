import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return(
    <div>
        <div className={s.main_background}>
            <img src="https://www.visitflorida.com/content/dam/visitflorida/en-us/images/11.%20Flagler%20Beachcroppedhoriz.jpg.1280.500.rendition" alt="image"/>
        </div>

        <div>Content</div>

        <MyPosts />


    </div>

    )
}

export default  Profile;