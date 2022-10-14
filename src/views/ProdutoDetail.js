import React from "react";
import { useEffect, useState } from "react";
import { ProdutoService } from "../api/ProdutoService";

export const ProdutoDetail = () => {
    console.log('entrou')
    console.log(window.location.href);

    //importante: infelizmente nao consegui fazer o useParams() funcionar

    let url = window.location.href;
    
    let urlPartes = url.split('/');
    console.log(urlPartes);
    const id = urlPartes[urlPartes.length-1];
    
    console.log(id)
    const [ produto, setProduto ] = useState({});
    const fecthProduto = async () => {
        const { data } = await ProdutoService.getProdutoPorId(id);
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        console.log(jsonTxt)
        setProduto(jsonData);
    }

    useEffect(() => {
        fecthProduto();
    }, []);
    return (
        <div>
            <h1>Produto</h1>
            <p>{produto.nome}</p>
            <p>{produto.descricao}</p>
        </div>
    );
}