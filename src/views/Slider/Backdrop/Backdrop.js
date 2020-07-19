import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = (props) => {
  return (
    <div
      className={classes.Backdrop}
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateX(0vw)" : "translateX(300vw)",
      }}
      onClick={props.click}
    ></div>
  );
};

export default backdrop;
