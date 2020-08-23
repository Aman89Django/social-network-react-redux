import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";



const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);




    const addNewMessage = values => {
        props.sendMessage(values.newMessageBody)
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>

        </div>
    )
};


const AddMessageForm = props => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message"/>
                <button>Send</button>
            </form>
        </div>
    )
}


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);




export default Dialogs;


// import React from 'react';
// import s from './Dialogs.module.css';
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
// import {Redirect} from "react-router-dom";
//
//
// const Dialogs = (props) => {
//     let state = props.dialogsPage;
//     const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
//     const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);
//
//     const newMessageBody = state.newMessageBody;
//
//     const onSendMessageClick = () => {
//        props.sendMessage();
//     };
//
//     const onNewMessageChange = (e) => {
//         let body = e.target.value;
//         props.updateNewMessageBody(body);
//     };
//
//
//
//     return (
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {dialogsElements}
//             </div>
//             <div className={s.messages}>
//                 <div>{messagesElements}</div>
//
//                 <div><textarea onChange={onNewMessageChange} value={newMessageBody}
//                                placeholder='Enter your message'> </textarea></div>
//                 <div>
//                     <button onClick={onSendMessageClick}>Send </button>
//                 </div>
//
//
//             </div>
//
//         </div>
//     )
// };
//
// export default Dialogs;
