import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
        if (!props.profile){
            return <Preloader/>
        }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>


        </div>
    )
}
export default ProfileInfo;