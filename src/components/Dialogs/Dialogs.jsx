import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Aman" id="1"/>
                <DialogItem name="Aigerim" id="2"/>
                <DialogItem name="Sultan" id="3"/>
                <DialogItem name="Aiganym" id="4"/>
                <DialogItem name="Makhambet" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Hello there"/>
                <Message message="How are you?"/>
                <Message message="Yo!"/>
            </div>

        </div>

    )
};

export default Dialogs;
