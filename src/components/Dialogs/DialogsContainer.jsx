import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


// const newMesElement = React.createRef();
//     const addMes = () => {
//         const text = newMesElement.current.value;
//         // props.addMessage(text);
//         props.dispatch({type:'ADD-MESSAGE', newMessage:text});
//         newMesElement.current.value = '';
//     };

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            };

            const onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));

            };

            return <Dialogs dialogsPage={state}
                            sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
            />
        }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;

