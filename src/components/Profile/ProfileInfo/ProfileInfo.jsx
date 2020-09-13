import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import PreLoader from "../../Common/Preloader/PreLoader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from '../../../assets/images/avatar_user.png';
import ProfileDataReduxForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <PreLoader/>
    }

    const onPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = formData => {
        saveProfile(formData).then(() => {
                setEditMode(false);
            }
        )
    }


    return (
        <div className={s.profileCard}>
            <div>
                <img src={profile.photos.large || userAvatar} className={s.avatarLogo}/>
                {isOwner && <input type="file" onChange={onPhotoSelected}/>}
            </div>

            {editMode
                ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile}
                               isOwner={isOwner}
                               gotToEditMode={() => {
                                   setEditMode(true)
                               }}/>}


            {/*{isOwner && <button onClick={() => { setEditMode(true) } }> Edit Profile</button>}*/}
            {/*{editMode*/}
            {/*? <ProfileDataForm profile={profile}/>*/}
            {/*: <ProfileData profile={profile}/>}*/}


            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        </div>
    )
};

const ProfileData = ({profile, isOwner, gotToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={gotToEditMode}>Edit Profile</button>
        </div>}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div><b>About me: </b>{profile.aboutMe}</div>
        <div><b>Looking for a Job:</b> {profile.lookingForAJob ? "Yes" : "No"}</div>
        <div><b>Looking for a Job Description:</b> {profile.lookingForAJobDescription}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })} </div>
    </div>
};

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
};

export default ProfileInfo;