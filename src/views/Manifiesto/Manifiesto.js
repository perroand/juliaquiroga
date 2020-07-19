import React from "react";

import classes from "./Manifiesto.module.css";

const manifiesto = () => {
  return (
    <div className={classes.Manifiesto}>
      <p>
        Soy Arquitecta con más de 10 años de experiencia profesional y una
        amplia trayectoria académica. Me gradué en la Universidad de Buenos
        Aires – Argentina, en el año 2013 y continué con sucesivos WorkShops en
        el ámbito de la arquitectura paramétrica. En el año 2015 llevé a cabo un
        Posgrado en la Universidad Di Tella, Buenos Aires – Argentina con
        especialización en materiales y tecnología, para finalizar mi recorrido
        académico con el Master sobre Futuros Emergentes en el Instituto de
        Arquitectura Avanzada de Cataluña, donde actualmente resido. En el
        ámbito laboral me especializo en reciclaje y remodelación de casas,
        departamentos y locales comerciales, aunque también he desarrollado
        proyectos nuevos. Brindo soluciones integrales en planificación,
        dirección y ejecución de obras de distintas escalas, buscando un
        equilibrio entre el diseño de calidad y la optimización de recursos. Mi
        búsqueda profesional tiene que ver con la redefinición del rol del
        arquitecto contemporáneo: me interesa trabajar en conjunto con el
        usuario, no solo entendiendo sus necesidades sino también interpretando
        sus hábitos y relación con el espacio. También busco innovar en sistemas
        de construcción, materiales y propuestas espaciales.
      </p>
      <div className={classes.Title}>
        <h2>manifiesto.-</h2>
      </div>
    </div>
  );
};

export default manifiesto;
