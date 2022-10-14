import React from "react";
import { useEffect, useState } from "react";
import { FabricanteService } from "../api/FabricanteService";
import { ProdutoService } from "../api/ProdutoService";

export const FabricanteDetail = () => {
    console.log('entrou')
    console.log(window.location.href);

    //importante: infelizmente nao consegui fazer o useParams() funcionar

    let url = window.location.href;
    
    let urlPartes = url.split('/');
    console.log(urlPartes);
    const id = urlPartes[urlPartes.length-1];
    
    console.log(id)
    const [ fabricante, setFabricante ] = useState({});
    const fetchFabricante = async () => {
        const { data } = await FabricanteService.getFabriacantePorId(id);
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        console.log(jsonTxt)
        setFabricante(jsonData);
    }

    useEffect(() => {
        fetchFabricante();
    }, []);
    return (
        <div>
            <h1>Fabricante</h1>
            <p>{fabricante.descricao}</p>
        </div>
    );
}