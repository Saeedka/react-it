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
            <h1>{props.profile.fullName}</h1>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <span>About me: {props.profile.aboutMe}</span>
            <div>
                <ProfileStatus  status={props.status} updateStatus={props.updateStatus}/>
            </div>
            {props.profile.lookingForAJob&&<span>{props.profile.lookingForAJobDescription}</span>}


        </div>
    )
}
export default ProfileInfo;
/*
aboutMe: "я круто чувак 1001%"
contacts: {facebook: "facebook.com", website: null, vk: "vk.com/dimych", twitter: "https://twitter.com/@sdf", instagram: "instagra.com/sds", …}
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0", large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}
userId: 2*/
