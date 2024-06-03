import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";
import { useDispatch, useSelector } from "react-redux";
import morton from "../assets/dog face.png"
import { red } from "@mui/material/colors";

const API = process.env.REACT_APP_API_STRAPI;
export const Inicio = (url) => {
  const dispatch = useDispatch();
  const { comercio } = useSelector((state) => state.alldata);
  const [animateOut, setAnimateOut] = useState(false);

  // </svg>

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  toTop();

  const handleButtonClick = () => {
    // Realiza la lógica necesaria antes de la redirección
    setAnimateOut(true);

    // Espera un tiempo suficiente para que la animación ocurra antes de redirigir
    setTimeout(() => {
      url.history.push(`${url.location.pathname}/Landing`);
    }, 500); // Ajusta este tiempo según la duración de la animación
  };

  if (url.location.pathname === "/") {
    url.location.pathname = "/sinMesa";
    console.log(url.location.pathname);
  }

  return (
    <div
      className={`LandingBack ${
        animateOut ? "animate__animated animate__slideOutUp" : ""
      }`}
    >
 <h1 style={{color:"red"}}>Cliente dado de baja por falta de pago :(</h1>
    </div>
  );
};
