import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {Route, withRouter} from "react-router-dom";
import Messages from "./Message/Messages";


class Dialogs extends React.Component {

    componentDidMount() {
        this.props.getDialogsList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {


        let dialogsElements = this.props.dialogsPage.dialogs.map((d) => <DialogItem id={d.id} userName={d.userName} photo={d.photos?.small}/>)
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <Route path='/dialogs/:userId' render={() => <Messages {...this.props}/>}/>
            </div>
        )
    }
}


export default Dialogs;