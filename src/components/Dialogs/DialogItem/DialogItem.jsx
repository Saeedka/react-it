import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img className={s.photo} src={props.photo} alt=""/>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem;