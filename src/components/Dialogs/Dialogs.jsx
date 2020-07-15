import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
    const messagesElements = state.messages.map(m => <Message message={m.message}/>);

    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

    };


// const newMesElement = React.createRef();
//     const addMes = () => {
//         const text = newMesElement.current.value;
//         // props.addMessage(text);
//         props.dispatch({type:'ADD-MESSAGE', newMessage:text});
//         newMesElement.current.value = '';
//     };

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                               placeholder='Enter your message'> </textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send </button>
                </div>


            </div>

        </div>

    )
};

export default Dialogs;
