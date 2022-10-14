import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer"

export const MainMenu = () => (
    <MainMenuContainer>
        <h2>Sabores Administração</h2>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>Sobre</NavLink></li>
            <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
            <li><NavLink to={"/categorias"}>Categorias</NavLink></li>
            <li><NavLink to={"/fabricantes"}>Fabricantes</NavLink></li>
            <li>Estoque</li>
        </ul>
    </MainMenuContainer>
);