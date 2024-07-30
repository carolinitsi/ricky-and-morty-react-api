import React from "react";
import ThemeOn from  "../../assets/images/moon.png";
import ThemeOff from "../../assets/images/moon-dark.png";

const claro = <img src={ThemeOn}   alt="Tema Claro" />;
const escuro = <img src={ThemeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? claro : escuro);