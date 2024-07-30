import React from "react";
import {Container, ContainerInfos} from './style';

const CardEpisodio = ({episodio}) => {

    return (
        <Container>
            <h1>{episodio.name}</h1>
            <ContainerInfos>
                <p><strong>{episodio.episode}</strong></p>
                <p> <strong>Assistir: </strong>{episodio.url}</p>
                <p> {episodio.air_date}</p>
                <p> <strong>Número de personagens: </strong>{episodio.characters.length}</p>
            </ContainerInfos>
        </Container>

    )

}

export default CardEpisodio; 