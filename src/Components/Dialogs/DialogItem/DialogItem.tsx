import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <>
            <div className={d.items}><img src="https://iconape.com/wp-content/png_logo_vector/react.png"
                                          alt=""/><NavLink to={path}> {props.name}</NavLink></div>
        </>);
}
export default DialogItem