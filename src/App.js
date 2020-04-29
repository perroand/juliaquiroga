import React, { useState, useEffect } from "react";
import "./App.css";

import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Slider from "./components/Slider/Slider";
import Backdrop from "./components/Slider/Backdrop/Backdrop";
import Contact from "./components/Contact/Contact";

import projectList from "./hoc/projectList";

import Navigator from "./components/Navigator/Navigator";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProj, setSelectedProj] = useState({
    title: "",
    subtitle: "",
    tags: {},
    portada: null,
    plano: null,
    img: [],
  });
  const [modalWidth, setModalWidth] = useState(null);
  const [projectsTop, setProjectsTop] = useState([]);
  // const [offsetTop, setOffsetTop] = useState(0);
  const [colorNav, setColorNav] = useState(false);
  const [widthMobile, setWidthMobile] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= topsArr[1] && window.pageYOffset < topsArr[2]) {
      setColorNav(true);
    } else {
      setColorNav(false);
    }
  });

  const handlerModalWidth = (width, top) => {
    if (width !== null) {
      setModalWidth(width);
    }
    projectsTop.push(top);
  };

  let topsArr = [...new Set(projectsTop)].filter((el) => el !== null);

  const modalOpenInSitu = (key) => {
    setShowModal(true);
    setSelectedProj(projectList[0][key]);
    window.scrollTo({ top: topsArr[0], behavior: "smooth" });
  };

  const modalOpenTabula = (key) => {
    setShowModal(true);
    setSelectedProj(projectList[1][key]);
    window.scrollTo({ top: topsArr[1], behavior: "smooth" });
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    if (window.innerWidth < 1030) {
      setWidthMobile(true);
    }
  }, [showModal, widthMobile]);

  return (
    <div className={"App"}>
      <Navigator colorClass={colorNav} />
      <Backdrop
        show={showModal}
        click={() => setShowModal(false)}
        top={projectsTop}
      />
      {/* {selectedProj ? ( */}
      <Slider
        show={showModal}
        click={() => setShowModal(false)}
        projArr={selectedProj}
        modalWidth={modalWidth}
        top={projectsTop}
        mobileArr={widthMobile}
      />
      {/* ) : null} */}
      <Landing />
      <Projects
        sectionTitle="-obras-"
        title={"in situ.-"}
        text={
          "'en el sitio' o 'en el lugar', suele utilizarse para designar una manipulación realizada en el lugar."
        }
        proj={projectList[0]}
        click={modalOpenInSitu}
        getModalWidth={handlerModalWidth}
        color="White"
      />
      <Projects
        sectionTitle="-proyectos-"
        title={"tabula rasa.-"}
        text={
          "del latín, es una tablilla sin inscribir y se aplica a algo que está exento de cuestiones o asuntos anteriores."
        }
        proj={projectList[1]}
        click={modalOpenTabula}
        getModalWidth={handlerModalWidth}
        color="Black"
      />
      <Contact getModalWidth={handlerModalWidth} />
    </div>
  );
}

export default App;
