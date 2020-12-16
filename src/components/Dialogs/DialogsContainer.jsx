import {addMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state)=>{
    return{
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addMessage : (message) => {
            dispatch(addMessage(message));
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;