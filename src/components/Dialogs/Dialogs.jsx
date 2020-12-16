import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Input, Textarea} from "../common/FormControls";
import {required} from "../../utils/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";


const Dialogs = (props) => {
    const onSubmit = (formData) => {
        props.addMessage(formData.message)
    }
    let dialogsElelemens = props.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElelemens}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Message"} name={"message"} component={Textarea} validate={[required]}/>
            <button>Send</button>
        </form>
    )
}
const DialogsReduxForm =  reduxForm({form: 'dialogs'})(DialogsForm)
export default Dialogs;