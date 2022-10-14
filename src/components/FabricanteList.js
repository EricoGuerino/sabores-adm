import React from "react";
import { NavLink } from "react-router-dom";

export const FacricanteList = ( {fabricantes} ) => (
    <section>
        {fabricantes.map((fab,index) => {
            return (
                <ul key={index}>
                    <div>{index+1} - <NavLink to={`/fabricantes/${fab.id}`}>{fab.descricao}</NavLink></div>
                </ul>
            );
        })}
    </section>
)