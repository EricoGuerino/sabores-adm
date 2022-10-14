import React from "react";
import { useEffect, useState } from "react";
import { ProdutoService } from "../api/ProdutoService";
import { ProductList } from "../components/ProductList";
import { Container } from "../styles/Container";

export const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    const fetchProdutos = async() => {
        const {data} = await ProdutoService.getProdutos();
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        setProdutos(jsonData);
    }

    useEffect(() => {
        fetchProdutos();
    },[]);

    return (
        <Container>
            <ProductList produtos={produtos}/> 
        </Container>
    );
};