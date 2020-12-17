import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={props.viewed && s.viewed}>
            <div className={s.message}>{props.body}</div>
            <div className={s.date}>{props.addedAt}</div>
        </div>
    )
}


export default Message;