import React from 'react';
import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/Preloader/PreLoader";


const ProfileInfo = props => {
    if(!props.profile) {
        return <PreLoader />
    }
    return (
        <div>
            <div className={s.main_background}>
                <img
                    src="https://www.visitflorida.com/content/dam/visitflorida/en-us/images/11.%20Flagler%20Beachcroppedhoriz.jpg.1280.500.rendition"
                    alt="image"/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;