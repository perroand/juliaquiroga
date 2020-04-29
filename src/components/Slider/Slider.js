import React, { useState, useEffect } from "react";

import classes from "./Slider.module.css";

import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.css";
// import "//src/main.scss";
// import "//src/carousel.scss";
// import "//src/examples/presentation/presentation.scss";

// import Carousel from "flat-carousel";
// import Carousel from "nuka-carousel";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/scale-out-animation/scale-out-animation.scss";
// import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
// import "react-awesome-slider/dist/styles.css";

const Slider = (props) => {
  let [imgArray, setImgArray] = useState([]);

  // useEffect(() => {
  //   if (props.mobileArr && props.projArr.img.length > 0) {
  //     setImgArray(props.projArr.img.push(props.projArr.plano));
  //   }
  // }, [props.mobileArr, props.projArr.img.length]);

  console.log(imgArray);

  const images = props.projArr.img.map((el, index) => {
    const containPicsProjects = [
      "concurso",
      "anchorena 6M",
      "universidad de buenos aires",
      "instituto de arquitectura avanzada",
    ];
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
  } else {
    tags = (
      <p className={classes.DescriptionAlt}>{props.projArr.description}</p>
    );
  }

  // console.log(tags);

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
