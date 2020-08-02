import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';
import userAvatar from '../../assets/images/avatar_user.png';
import {NavLink} from "react-router-dom";


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
                           ? <Button variant={"contained"} color={"secondary"} onClick={() => {
                               props.unfollow(u.id)
                           }}>Unfollow</Button>
                           : <Button variant={"contained"} color={"primary"} onClick={() => {
                               props.follow(u.id)
                           }}>Follow</Button>}
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