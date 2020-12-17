import {addMessage, getDialogsList, getMessagesList, sendMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage,
    }
}

/*const mapDispatchToProps = (dispatch)=>{
    return{
        addMessage : (message) => {
            dispatch(addMessage(message));
        }
    }
}*/




export default compose(
    connect(mapStateToProps, {addMessage,getDialogsList,getMessagesList,sendMessage}),
    withAuthRedirect
)(Dialogs);