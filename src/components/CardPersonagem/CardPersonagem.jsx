import {Link} from 'react-router-dom';
import {Container, ContainerText} from './style';

const CardPersonagem = ({personagem}) => {
    return (
        <Container>
                <Link to={"/ricky-and-morty-react-api/Personagem/" + personagem.id}>
                    <img src={personagem.image}/>
                </Link>
                <ContainerText>
                    <h1>{personagem.name}</h1>
                    <p>Status: {personagem.status}</p>
                    <p>Gênero: {personagem.gender}</p>
                    <p>Espécie: {personagem.species}</p>
                    <p>Número de episódios: {personagem.episode.length}</p>
                </ContainerText>
        </Container>

    )

}

export default CardPersonagem;