import React from "react";

import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <header id="home" className={classes.LandingCont}>
      <div className={classes.Text}>
        <h1>
          Julia
          <br />
          Quiroga.-
        </h1>
        <hr />
        <h3>
          arquitecta
          <br />
          dirección y ejecución de obra
        </h3>
      </div>
    </header>
  );
};

export default Landing;
