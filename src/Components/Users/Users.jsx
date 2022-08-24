import { v1 } from "uuid";
import styles from "./users.module.css"
let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Who i am", location: { city: "Krakow", country: "Polska" } },
            { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Work hard", location: { city: "Warshaw", country: "Polska" } },
            { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: false, fullName: "Name S.", status: "Procrastination is not about me", location: { city: "Wroclaw", country: "Polska" } },
            { id: v1(), photoUrl: "https://aux2.iconspalace.com/uploads/41783629.png", followed: true, fullName: "Name S.", status: "Looking for job", location: { city: "Wieliczka", country: "Polska" } },
        ]);
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div ><img src={u.photoUrl} className={styles.userPhoto} alt="User logo without img" /></div>
                    <div>
                        <button>
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
}

export default Users