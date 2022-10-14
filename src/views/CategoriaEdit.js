import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { CategoriaService } from "../api/CategoriaService";
import { Container } from "../styles/Container";

export const CategoriaEdit = ( {categoria} ) => {
    let edicao = false;
    const cat_descricao_input = React.createRef();
    if (categoria == 'undefined' || categoria.id == 'undefined') {
        edicao = true;
    }

    async function createCategoria() {
        
        //React.findDOMNode(this.refs.cat_descricao_input).value();
        //console.log(descricao);
        //CategoriaService.novaCategoria(categoriaDescricao);
        
        return <Redirect to={'/categorias'}/>
    }

    return (
        <Container>
            <form>
                <h2>{edicao ? 'EDITAR CATEGORIA' : 'NOVA CATEGORIA'}</h2>
                Descrição: <input type="text" id="input_categoria" name="categoria"/>

                <div align="center">
                    <input type="button" onClick={() => { createCategoria() }} value={edicao ? 'Alterar' : 'Salvar'}/>
                </div>
            </form>
        </Container>
    );
};