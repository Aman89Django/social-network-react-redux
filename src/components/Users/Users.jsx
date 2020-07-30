import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';

const Users = props => {
if(props.users.length ===0 ) {
    props.setUsers(
        [
            {
                id: 1,
                photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
                followed: false,
                fullName: 'Aman',
                status: 'Hey guys!',
                location: {city: 'Shymkent', country: 'Kazakhstan'}
            },
            {
                id: 2,
                photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
                followed: true,
                fullName: 'Antony',
                status: 'Hello world!',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {
                id: 3,
                photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
                followed: false,
                fullName: 'Andrew',
                status: 'Hey guys!',
                location: {
                    city: 'Alberta',
                    country: 'Canada'
                }
            },
        ]
    );
};


    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.mainBlock}>
                <span className={s.leftBlock}>
                    <div>
                        <img src={u.photoUrl} className={s.photo}/>
                    </div>
                    <div>
                       {u.followed
                           ? <Button variant={"contained"} color={"primary"} onClick={() => {
                               props.unfollow(u.id)}}>Unfollow</Button>
                           : <Button variant={"contained"} color={"primary"} onClick={() => {
                               props.follow(u.id)}}>Follow</Button>}
                    </div>
                </span>
                <span className={s.rightBlock}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
};


export default Users;