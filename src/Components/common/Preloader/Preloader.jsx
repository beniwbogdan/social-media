import React from 'react'
import styles from "../../Users/userscontainer.module.css"
import preloader from "../../../assets/preloader.gif"

function Preloader() {
    return (<div className={styles.Preloader}><img src={preloader} alt={"preloader"} /></div>)
}

export default Preloader