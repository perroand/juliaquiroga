import React from "react";
import classes from "./Navigator.module.css";

const navigator = (props) => {
  return (
    <div className={classes.NavWrapper}>
      <div>
        <a
          className={props.colorClass ? classes.White : classes.Black}
          href="#home"
        >
          <h1>JQ.-</h1>
        </a>
      </div>
      <div
        className={[classes.AnchorCont, classes[props.colorClass]].join(" ")}
      >
        <a
          className={props.colorClass ? classes.White : classes.Black}
          href="#obras"
        >
          obras
        </a>
        <a
          className={props.colorClass ? classes.White : classes.Black}
          href="#proyectos"
        >
          proyectos
        </a>
        <a
          className={props.colorClass ? classes.White : classes.Black}
          href="#contacto"
        >
          contacto
        </a>
      </div>
    </div>
  );
};

export default navigator;
