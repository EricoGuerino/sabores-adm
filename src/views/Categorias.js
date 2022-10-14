import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CategoriaService } from "../api/CategoriaService";
import { CategoriaList } from "../components/CategoriaList";
import { Container } from "../styles/Container";

export const Categorias = () => {
    const [categorias, setCategorias] = useState([]);
    const fetchCategorias = async() => {
        const {data} = await CategoriaService.getCategorias();
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        setCategorias(jsonData);
    }

    useEffect(() => {
        fetchCategorias();
    },[]);

    return (
        <Container>
            <CategoriaList categorias={categorias}/>

            <div align="center">
                <NavLink to={`/novaCategoria`}>Nova Categoria</NavLink>
            </div>
        </Container>
    );
};