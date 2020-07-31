import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';
import * as axios from 'axios';
import userAvatar from '../../assets/images/avatar_user.png';


const Users = props => {
if(props.users.length ===0 ) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items);
        })
        .catch(error =>{
            console.error(error);
        });
};


    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.mainBlock}>
                <span className={s.leftBlock}>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small : userAvatar } className={s.photo}/>
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
};


export default Users;