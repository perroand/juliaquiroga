import React, { useRef, useState, useEffect } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const compTop = useRef();

  const [contactTop, setContactTop] = useState(null);

  useEffect(() => {
    setContactTop(compTop.current.offsetTop);
    if (compTop.current.offsetTop) {
      props.getModalWidth(null, contactTop);
    }
  }, [props, contactTop]);

  return (
    <div className={classes.Contact}>
      <div ref={compTop} id="contacto" className={classes.ContactCont}>
        <div className={classes.DataContainer}>
          <h1 className={classes.Title}>contacto.-</h1>
          <p className={classes.ContactData}>
            <p>+34 634 184 997</p>
            <a href="mailto:julesquiroga@gmail.com">julesquiroga@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/julia-quiroga-arq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <p>Barcelona (08004 / Sants-Montjuïc)</p>
          </p>
        </div>
        <div className={classes.ManifestCont}>
          <h1>manifiesto</h1>
          <div className={classes.Manifest}>
            <p>Arquitecta con más de 10 años de experiencia profesional.</p>
            <p>
              Especializada en reciclaje y remodelación de casas, departamentos
              y locales comerciales, aunque también he desarrollado proyectos
              nuevos. Brindo soluciones integrales en planificación, dirección y
              ejecución de obras de distintas escalas, buscando un equilibrio
              entre el diseño de calidad y la optimización de recursos.
            </p>
            <p>
              Mi búsqueda profesional tiene que ver con la redefinición del rol
              del arquitecto contemporáneo: me interesa trabajar en conjunto con
              el usuario, no solo entendiendo sus necesidades sino también
              interpretando sus hábitos y relación con el espacio. También busco
              innovar en sistemas de construcción, materiales y propuestas
              espaciales.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a href="Julia_Quiroga_CV2020.pdf" target="_blank">
                descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Footer}>
        <p>
          // fotos.- Ana García Quiroga // diseño y programación.- Agustín Jaime
          //
        </p>
      </div>
    </div>
  );
};

export default Contact;
