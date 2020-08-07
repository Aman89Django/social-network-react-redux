import React from 'react';
import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/Preloader/PreLoader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = props => {
    if(!props.profile) {
        return <PreLoader />
    }
    return (
        <div>
            <div className={s.main_background}>

            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>

                <ProfileStatus status={'HELLO MY FRIENDS'}/>
            </div>
        </div>
    )
}

export default ProfileInfo;