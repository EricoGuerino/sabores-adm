import React from "react";
import { useEffect, useState } from "react";
import { CategoriaService } from "../api/CategoriaService";

export const CategoriaDetail = () => {
    console.log('entrou')
    console.log(window.location.href);

    //importante: infelizmente nao consegui fazer o useParams() funcionar

    let url = window.location.href;
    
    let urlPartes = url.split('/');
    console.log(urlPartes);
    const id = urlPartes[urlPartes.length-1];
    
    console.log(id)
    const [ categoria, setCategoria ] = useState({});
    const fetchCategoria = async () => {
        const { data } = await CategoriaService.getCategoriaPorId(id);
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        console.log(jsonTxt)
        setCategoria(jsonData);
    }

    useEffect(() => {
        fetchCategoria();
    }, []);
    
    return (
        <div>
            <h1>Categoria</h1>
            <p>{categoria.descricao}</p>
        </div>
    );
}