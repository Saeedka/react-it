import React from 'react'
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls";
import {required} from "../../../utils/validators";

const MyPosts = (props) => {

    let postsElements=props.posts.map(p=><Post message={p.post} likesCount={p.likesCount}/>)


    const onSubmit = (formData) => {
        props.addPost(formData.post);
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <NewPostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const NewPostForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"New post"} name={"post"} component={Textarea} validate={[required]}/>
            <button>Send</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'dialogs-add-post'})(NewPostForm)

export default MyPosts;