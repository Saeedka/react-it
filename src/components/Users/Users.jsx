import React from 'react'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

class Users extends React.Component {

    render() {
        return <div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <NavLink to={'/profile/'+u.id}>
                          <img src={u.photos.small != null ? u.photos.small : "shish"} className={s.userPhoto}/>
                      </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={this.props.followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => { this.props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={this.props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => { this.props.follow(u.id) }}>
                                Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}


export default Users;