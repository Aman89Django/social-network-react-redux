import React from 'react';
import s from './Users.module.css';
import Button from '@material-ui/core/Button';
import * as axios from 'axios';
import userAvatar from '../../assets/images/avatar_user.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
        let onPageChanged = pageNumber =>{
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
                .catch(error => {
                    console.error(error);
                });
        };

        return <div>
            <div className={s.cursor}>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                    onClick={(e) =>{onPageChanged(p)}} >{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={s.mainBlock}>
                <span className={s.leftBlock}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userAvatar} className={s.photo}/>
                    </div>
                    <div>
                       {u.followed
                           ? <Button variant={"contained"} color={"secondary"} onClick={() => {
                               this.props.unfollow(u.id)
                           }}>Unfollow</Button>
                           : <Button variant={"contained"} color={"primary"} onClick={() => {
                               this.props.follow(u.id)
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
    }
};


export default Users;