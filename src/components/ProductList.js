import React from "react";
import { NavLink } from "react-router-dom";

export const ProductList = ( {produtos} ) => (
    <section>
        {produtos.map((p,index) => {
            return (
                <ul key={index}>
                    <div>{index+1} - <NavLink to={`/produto/${p.id}`}>{p.nome}</NavLink></div>
                </ul>
            );
        })}
    </section>
)