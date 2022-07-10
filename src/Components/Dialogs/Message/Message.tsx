import d from "../Dialogs.module.css";
import React from "react";

const Message = (props: any) => {
    return (
        <div className={d.dialog}><img src="https://iconape.com/wp-content/png_logo_vector/react.png"
                                       alt=""/>{props.message}
        </div>
    );
}

export default Message