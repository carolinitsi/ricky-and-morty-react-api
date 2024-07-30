import React, {useState,useEffect} from "react";
import CardEpisodio from '../../components/CardEpisodio/CardEpisodio';
import {listaPersonagens} from '../../api/api';

import {Container, Title} from './style';

const Episodios = () => {

    const [episodios, setEpisodios] = useState();

    useEffect(() => {
        listaPersonagens(`/episode`, setEpisodios);
      }, [])

    return (
        <>
            <Title>Episódios</Title>
            <Container>
                {episodios && episodios.results.map((episodio) => {
                    return (
                        <CardEpisodio episodio={episodio}/>
                    )
                })}
            </Container>
        </>
    )
}

export default Episodios;