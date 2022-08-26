import * as axios from "axios";
import styles from "./users.module.css"
import userPhoto from "../../assets/user.png"

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Who i am", location: { city: "Krakow", country: "Polska" } },
    //         { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Work hard", location: { city: "Warshaw", country: "Polska" } },
    //         { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: false, fullName: "Name S.", status: "Procrastination is not about me", location: { city: "Wroclaw", country: "Polska" } },
    //         { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Looking for job", location: { city: "Wieliczka", country: "Polska" } },
    //     ]);
    // }
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            })
    }

    return <div className={styles.profileUsersPage}>
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
}

export default Users