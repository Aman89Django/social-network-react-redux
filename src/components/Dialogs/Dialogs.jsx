import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    const messagesElements = props.messages.map(m => <Message message={m.message}/>);


const newMesElement = React.createRef();

    const addMes = () => {
        const text = newMesElement.current.value;
        alert(text);
    };
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <textarea ref={newMesElement} />
                <button onClick={addMes}>Add message</button>
            </div>

        </div>

    )
};

export default Dialogs;
