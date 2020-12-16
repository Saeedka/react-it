import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {
    /* state = {
         editMode: false,
         status: this.props.status
     }
 */
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState("");


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])



    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "_______"}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                       value={status}/>
            </div>}
        </div>
    )
}

export default ProfileStatus