import React, {useState,useEffect} from "react";
import CardPersonagem from '../../components/CardPersonagem/CardPersonagem';
import {listaPersonagens} from '../../api/api';

import {Container, Title} from './style';

const Personagens = () => {

    const [personagens, setPersonagens] = useState();

    useEffect(() => {
        listaPersonagens(`/character`, setPersonagens);
      }, [])

    console.log(personagens);

    return (
        <>
            <Title>Personagens</Title>
            <Container>
                {personagens && personagens.results.map((personagem) => {
                    return (
                        <CardPersonagem personagem={personagem}/>
                    )
                })}
            </Container>
        </>
    )
}

export default Personagens;