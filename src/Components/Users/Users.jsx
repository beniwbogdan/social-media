import styles from "./users.module.css"
import userPhoto from "../../assets/user.png"
import { NavLink } from "react-router-dom";
function Users(props) {
    let pagesCount = Math.ceil((props.totalUsersCount) / (props.pageSize));
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.profileUsersPage}>
            <div className={styles.numbersOfPage}>
                {pages.map(p => {

                    return <span
                        className={props.currentPage === p ? styles.selectedPage : styles.nonSelectedPage}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span className={styles.userItem}>
                        <div >
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small != null
                                        ? u.photos.small
                                        : userPhoto}
                                    className={styles.userPhoto}
                                    alt="User logo without img" />
                            </NavLink>

                        </div>
                        <div className={styles.textData}>
                            <span >
                                <span>
                                    <div><b>{u.name}</b></div>
                                    <div>{u.status}</div>
                                </span>
                                <span className={styles.location}>
                                    <div>{"Krakow"}</div>
                                    <div>{"Poland"}</div>
                                    {/* 
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div> 
                            */}
                                </span>
                            </span>
                            {/* {props.followingInProgress ?:} */}
                            <div className={styles.followButton}>
                                {
                                    u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => { props.unfollow(u.id); }}
                                            style={{ color: "red" }}>
                                            <b>unfollow</b></button>

                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => { props.follow(u.id); }}
                                            style={{ color: "green" }}>
                                            <b>follow</b></button>
                                }
                            </div>
                        </div>
                    </span>

                </div>)
            }
        </div>
    )
}
export default Users
