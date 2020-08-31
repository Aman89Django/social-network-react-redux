import React from 'react';
import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/Preloader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <PreLoader />
    }
    return (
        <div>
            <div className={s.main_background}>

            </div>
            <div>
                <img src={profile.photos.large}/>
                <div>About me: {profile.aboutMe}</div>
                <div>Name: {profile.name}</div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;