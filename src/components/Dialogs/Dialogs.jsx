import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {messages} from '../../index';
import {dialogsData} from "../../index";


const Dialogs = (props) => {



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
