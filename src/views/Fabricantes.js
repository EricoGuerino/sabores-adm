import React from "react";
import { useEffect, useState } from "react";
import { FabricanteService } from "../api/FabricanteService";
import { FacricanteList } from "../components/FabricanteList";
import { Container } from "../styles/Container";

export const Fabricantes = () => {
    const [fabricantes, setFabricantes] = useState([]);
    const fetchFabricantes = async() => {
        const {data} = await FabricanteService.getFabricantes();
        var jsonTxt = JSON.stringify(data);
        var jsonData = JSON.parse(jsonTxt);
        setFabricantes(jsonData);
    }

    useEffect(() => {
        fetchFabricantes();
    },[]);

    return (
        <Container>
            <FacricanteList fabricantes={fabricantes}/> 
        </Container>
    );
};