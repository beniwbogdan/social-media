import React from 'react'
import * as axios from "axios";
import styles from "./users.module.css"
import userPhoto from "../../assets/user.png"

class User extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    getNextUsers() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=2&count=2")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        let pagesCount = (this.props.totalUsersCount) / (this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (

            <div className={styles.profileUsersPage}>
                <div className={styles.numbersOfPage}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                    })}


                </div>
                <button onClick={this.getNextUsers}>NEXT PAGE</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span className={styles.userItem}>
                            <div ><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="User logo without img" /></div>
                            <div >
                                <button className={styles.followButton}>
                                    {
                                        u.followed
                                            ? <button onClick={() => { this.props.unfollow(u.id) }}>followed</button>
                                            : <button onClick={() => { this.props.follow(u.id) }}>unfollowed</button>
                                    }
                                </button>
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"Krakow"}</div>
                                <div>{"Poland"}</div>
                                {/* <div>{u.location.country}</div>
                        <div>{u.location.city}</div> */}
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
    }
}
export default User