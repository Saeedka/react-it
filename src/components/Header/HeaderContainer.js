import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {getUserData,logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData();
    }


    render() {
        return <>
            <Header authData={this.props.authData} logout={this.props.logout} isAuth={this.props.isAuth}/>
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        authData: state.authData
    }
}

export default connect(mapStateToProps, {getUserData,logout})(HeaderContainer);
