import React, { useRef, useEffect, useState, useLayoutEffect } from "react";

import classes from "./Projects.module.css";
import Project from "./Project/Project";

const Projects = (props) => {
  const projectsRef = useRef();

  let projectsDisplay = null;

  const modalContRef = useRef();
  const [modalWidth, setModalWidth] = useState(null);
  const [projectsTop, setProjectsTop] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  let topsArr = [];

  useLayoutEffect(() => {
    function updateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  useEffect(() => {
    setModalWidth(modalContRef.current.offsetWidth);
    setProjectsTop(projectsRef.current.offsetTop);
    if (modalContRef.current.offsetWidth) {
      props.getModalWidth(modalWidth, projectsTop);
    }
  }, [modalContRef, props, modalWidth, projectsTop, topsArr, windowWidth]);

  if (props.proj) {
    projectsDisplay = props.proj.map((el, ind) => {
      return (
        <Project
          key={ind}
          imgArr={el.img}
          img={el.portada}
          title={el.title}
          text={el.text}
          click={() => props.click(ind)}
        />
      );
    });
  }
  return (
    <div
      id={props.title === "in situ.-" ? "obras" : "proyectos"}
      ref={projectsRef}
    >
      <section className={classes.ProjectsCont}>
        <div className={[classes.Title, classes[props.color]].join(" ")}>
          <p>{props.sectionTitle}</p>
          <hr />
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <div className={classes.Projects} ref={modalContRef}>
          {projectsDisplay}
        </div>
      </section>
    </div>
  );
};

export default Projects;
