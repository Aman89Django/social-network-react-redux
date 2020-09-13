import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        <div><b>Full name:</b> <Field placeholder={"Full name"} name={"fullName"} component={Input}/></div>
        <div><b>Looking for a Job:</b> <Field component={Input} name={"lookingForAJob"} type={"checkbox"}/></div>
        <div><b>Looking for a Job Description:</b> <Field placeholder={"My professional skills"}
                                                          name={"lookingForAJobDescription"} component={Textarea}/>
        </div>
        <div><b>About me: </b><Field placeholder={"About Me"} name={"aboutMe"} component={Textarea}/></div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact} key={key}><b>{key}:</b><Field component={Input} placeholder={key} name={"contacts." + key}/>

            </div>}
            )}
            <div className={s.formSummaryError}>{error}</div>
        </div>




    </form>
};


const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);


export default ProfileDataReduxForm;