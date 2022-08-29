import styles from "./users.module.css"
import userPhoto from "../../assets/user.png"

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
                        className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span className={styles.userItem}>
                        <div ><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="User logo without img" /></div>
                        <div >
                            <button className={styles.followButton}>
                                {
                                    u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}>followed</button>
                                        : <button onClick={() => { props.follow(u.id) }}>unfollowed</button>
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
export default Users
