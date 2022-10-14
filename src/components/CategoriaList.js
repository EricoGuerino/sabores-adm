import React from "react";
import { NavLink } from "react-router-dom";

export const CategoriaList = ( {categorias} ) => (
    <section>
        {categorias.map((cat,index) => {
            return (
                <ul key={index}>
                    <div>{index+1} - <NavLink to={`/categorias/${cat.id}`}>{cat.descricao}</NavLink></div>
                </ul>
            );
        })}
    </section>
);