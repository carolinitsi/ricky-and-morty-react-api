import React, {useState,useEffect} from "react";
import CardPersonagem from '../../components/CardPersonagem/CardPersonagem';
import {mostraPersonagem} from '../../api/api';

import {Container, Title} from './style';
import {useParams} from "react-router-dom";

const Personagem = () => {
    let {id} = useParams();
    console.log(id);

    const [personagem, setPersonagem] = useState();

    useEffect(() => {
        mostraPersonagem(`/character/${id}`, setPersonagem);
      }, [])

    return (
        <>
            <Title>Personagens</Title>
            <Container>
            {personagem && <CardPersonagem personagem={personagem}/>}
            </Container>
        </>
    )
}

export default Personagem;