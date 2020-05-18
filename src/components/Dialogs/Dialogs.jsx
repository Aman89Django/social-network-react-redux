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
    const dialogsData = [
        {id: 1, name: "Aman"},
        {id: 2, name: "Aigerim"},
        {id: 3, name: "Sultan"},
        {id: 4, name: "Aiganym"},
        {id: 5, name: "Makhambet"},
    ];
    const messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello there!"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Yo!"},
        {id: 5, message: "Everything cools!"},
    ];

    const dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>

    )
};

export default Dialogs;
