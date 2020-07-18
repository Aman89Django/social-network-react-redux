import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));

    };
    console.log(props.store.getState().dialogsPage);


// const newMesElement = React.createRef();
//     const addMes = () => {
//         const text = newMesElement.current.value;
//         // props.addMessage(text);
//         props.dispatch({type:'ADD-MESSAGE', newMessage:text});
//         newMesElement.current.value = '';
//     };

    return (
        <Dialogs dialogsPage= {state}
                 sendMessage = { onSendMessageClick }
                 updateNewMessageBody = {onNewMessageChange}
                 newMessageBody = {props.store.getState().dialogsPage.newMessageBody}

        />
    )
};

export default DialogsContainer;

