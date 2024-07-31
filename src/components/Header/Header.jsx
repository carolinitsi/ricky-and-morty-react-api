import {Link} from 'react-router-dom';
import {Container,Navigation} from './style';

const Header = () => {
    return (
        <Container>
            <Navigation>
                <li><Link to="/ricky-and-morty-react-api/">Inicio</Link></li>
                <li><Link to="/ricky-and-morty-react-api/episodios">Episódios</Link></li>
                <li><Link to="/ricky-and-morty-react-api/personagens">Personagens</Link></li>
            </Navigation>
        </Container>
    )
}

export default Header;