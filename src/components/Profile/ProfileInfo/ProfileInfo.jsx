import React from 'react';
import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/Preloader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from '../../../assets/images/avatar_user.png';


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile) {
        return <PreLoader />
    }

    const onPhotoSelected = e =>{
      if(e.target.files.length){
          savePhoto(e.target.files[0]);
          debugger;
      }
    };


    return (
        <div className={s.profileCard}>
            <div className={s.main_background}>

            </div>
            <div >
                <img src={profile.photos.large || userAvatar } className={s.avatarLogo} />
                { isOwner && <input type="file" onChange={onPhotoSelected}/>}


                <div>About me: {profile.aboutMe}</div>
                <div>Name: {profile.name}</div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;