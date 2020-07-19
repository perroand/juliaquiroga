import React from "react";
import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={classes.ProjectCont} onClick={props.click}>
      <div className={classes.ModalCont}>
        <div className={classes.ModalText}>
          <p style={{ width: "98%", margin: "auto" }}>{props.title}</p>
          <hr />
        </div>
      </div>
      <div style={{ backgroundImage: "url(" + props.img + ")" }}></div>
    </div>
  );
};

export default Project;
