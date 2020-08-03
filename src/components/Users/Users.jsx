import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';
import userAvatar from '../../assets/images/avatar_user.png';
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";


const Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    ;


    return (
        <div>
            <div className={s.cursor}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.mainBlock}>
                <span className={s.leftBlock}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userAvatar} className={s.photo}/>
                        </NavLink>
                        </div>
                    <div>
                       {u.followed
                           // FOLLOW
                           ? <Button disabled={props.followingInProgress.some(id => id ===u.id)} variant={"contained"} color={"secondary"} onClick={() => {
                               props.toggleIsFollowingInProgress(true, u.id);
                               usersAPI.unfollowUsers(u.id)
                                   .then(data => {
                                       if (data.resultCode === 0) {
                                           props.unfollow(u.id);
                                       }
                                       {props.toggleIsFollowingInProgress(false, u.id)}
                                   });


                           }}>Unfollow</Button>

                           // UNFOLLOW
                           : <Button disabled={props.followingInProgress.some(id => id ===u.id)} variant={"contained"} color={"primary"} onClick={() => {
                               props.toggleIsFollowingInProgress(true, u.id);
                               usersAPI.followUsers(u.id)
                                   .then(data=> {
                                       if (data.resultCode === 0) {
                                           props.follow(u.id);
                                       }
                                       {props.toggleIsFollowingInProgress(false, u.id)}
                                   });

                           }}>Follow</Button>
                       }
                    </div>
                </span>
                    <span className={s.rightBlock}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        {/*<span>*/}
                        {/*    <div>{u.location.country}</div>*/}
                        {/*    <div>{u.location.city}</div>*/}
                        {/*</span>*/}
                </span>
                </div>)
            }
        </div>
    )
};

export default Users;