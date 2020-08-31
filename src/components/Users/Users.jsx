import React from 'react';
import s from './Users.module.css';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            <div>{
                props.users.map(u => <User key={u.id} className={s.mainBlock}
                                           user={u} followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow} follow={props.follow}/>)
            }</div>
        </div>
    )
};

export default Users;