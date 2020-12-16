import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
    }
}
/*
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost: (newPost)=>{
            dispatch(addPost(newPost));
        }
    }
}*/

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts);

export default MyPostsContainer;