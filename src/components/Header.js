import React from "react";
import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu";
import logo from "../images/sabores_logo.jpg";
import estilos from "../styles/estilos.css"

const imgStyle = {
    width: '100%',
    height: '250px'
};

export const Header = () => (
    <HeaderContainer>
        <img src={logo} style={imgStyle}/>
        <MainMenu />
    </HeaderContainer>
);