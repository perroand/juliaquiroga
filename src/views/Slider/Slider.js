import React, { useState, useEffect } from "react";

import classes from "./Slider.module.css";

import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.css";

const Slider = (props) => {
  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    if (window.innerWidth < 1030 && props.show) {
      let arrconplano = [...props.projArr.img, props.projArr.plano];
      setImgArray(arrconplano);
    } else {
      setImgArray(props.projArr.img);
    }
  }, [props.show]);

  let images = null;

  if (imgArray.length > 0 && props.show) {
    images = imgArray.map((el, index) => {
      const containPicsProjects = [
        "concurso",
        "anchorena 6M",
        "universidad de buenos aires",
        "instituto de arquitectura avanzada",
      ];

      if (window.innerWidth < 1030 && index === imgArray.length - 1) {
        return (
          <div
            className={classes.imgSlider}
            style={{
              backgroundImage: `url(${el})`,
              backgroundSize: "contain",
            }}
            key={index}
          ></div>
        );
      }

      return (
        <div
          className={classes.imgSlider}
          style={{
            backgroundImage: `url(${el})`,
            backgroundSize: containPicsProjects.includes(props.projArr.title)
              ? "contain"
              : "cover",
          }}
          key={index}
        ></div>
      );
    });
  }

  let web = "";
  let textoConcurso = "";

  if (props.projArr.title === "concurso") {
    textoConcurso = (
      <p style={{ fontWeight: "300", fontStyle: "italic", textAlign: "right" }}>
        {props.projArr.texto}
      </p>
    );
  }

  if (props.projArr.web) {
    web = (
      <a
        href={props.projArr.web}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "black",
          textAlign: "right",
        }}
      >
        Visit web
      </a>
    );
  }

  let tags = [];
  if (props.projArr.tags && props.projArr) {
    tags = Object.keys(props.projArr.tags).map((el) => {
      return (
        <p>
          <span style={{ fontWeight: "300", fontStyle: "italic" }}>
            {el + "/ "}
          </span>{" "}
          {props.projArr.tags[el]}
        </p>
      );
    });
  } else if (props.projArr.title === "instituto de arquitectura avanzada") {
    tags = (
      <p className={classes.DescriptionAlt}>
        <span>
          <b>
            <em>Construïm</em>
          </b>
        </span>
        {props.projArr.description}
      </p>
    );
  } else if (props.projArr.title === "universidad de buenos aires") {
    tags = (
      <p className={classes.DescriptionAlt}>
        <span>
          <b>CIUDAD EVITA - DIAGRAMA</b>
        </span>{" "}
        <br />
        {props.projArr.description}
      </p>
    );
  } else {
    tags = (
      <p className={classes.DescriptionAlt}>{props.projArr.description}</p>
    );
  }

  return (
    <div
      className={
        props.show
          ? [classes.Slider, classes.SliderMove].join(" ")
          : classes.Slider
      }
      style={{
        opacity: props.show ? "1" : "0",
        width: props.modalWidth,
      }}
    >
      <div className={classes.Cont} style={{ width: "inherit" }}>
        <div className={classes.Exitbtn} onClick={props.click}>
          x
        </div>
        <div className={classes.SliderCont}>
          {props.show ? (
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              {images}
            </Carousel>
          ) : null}

          <div className={classes.Tags}>
            {tags}
            {web}
          </div>
        </div>
        <div className={classes.Description}>
          <div
            className={classes.textContainer}
            style={{
              transform: props.show ? "translateY(0)" : "translateY(-100vh)",
              opacity: props.show ? "1" : "0",
            }}
          >
            <div style={{ background: "black" }}>
              <h1 style={{ transform: "translateX(2.8px)" }}>
                {props.projArr.title}
              </h1>
            </div>

            <h3>{props.projArr.subtitle}</h3>
          </div>
          <div
            className={classes.imgContainer}
            style={{
              background:
                props.projArr.title !== "concurso"
                  ? `url(${props.projArr.plano}) center / contain no-repeat`
                  : "white",
            }}
          >
            {textoConcurso}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
