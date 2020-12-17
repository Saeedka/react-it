import s from "../Dialogs.module.css";
import {withRouter} from "react-router-dom";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls";
import {required} from "../../../utils/validators";
import Message from "./Message";

class Messages extends React.Component {
    componentDidMount() {
        this.props.getMessagesList(this.props.match.params.userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
            this.props.getMessagesList(this.props.match.params.userId);
            }


    render() {
        const onSubmit = (formData) => {
            this.props.sendMessage(this.props.match.params.userId, formData.message)

        }
        let messagesElements = this.props.dialogsPage.messages?.items?.map((m) => <Message body={m.body}/>);
        return (
            <div className={s.messages}>
                {messagesElements}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
}

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Message"} name={"message"} component={Textarea} validate={[required]}/>
            <button>Send</button>
        </form>
    )
}


const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default withRouter(Messages)