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
                <div>About me: {props.profile.aboutMe}</div>
                <div>Name: {props.profile.name}</div>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;