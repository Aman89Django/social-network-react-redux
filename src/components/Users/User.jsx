import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';
import userAvatar from '../../assets/images/avatar_user.png';
import {NavLink} from 'react-router-dom';


const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.mainBlock}>
                <span className={s.leftBlock}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userAvatar} className={s.photo}/>
                        </NavLink>
                        </div>
                    <div>
                       {user.followed
                           // FOLLOW
                           ? <Button disabled={followingInProgress.some(id => id === user.id)} variant={"contained"}
                                     color={"secondary"}
                                     onClick={() => {
                                         unfollow(user.id)
                                     }}>Unfollow</Button>

                           // UNFOLLOW
                           : <Button disabled={followingInProgress.some(id => id === user.id)} variant={"contained"}
                                     color={"primary"}
                                     onClick={() => {
                                         follow(user.id)
                                     }}>Follow</Button>
                       }
                    </div>
                </span>
            <span className={s.rightBlock}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    {/*<span>*/}
                    {/*    <div>{"user.location.country"}</div>*/}
                    {/*    <div>{"user.location.city"}</div>*/}
                    {/*</span>*/}
                </span>
        </div>
    )
};

export default User;