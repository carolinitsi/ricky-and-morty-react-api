import {Link} from 'react-router-dom';
import {Container,Navigation} from './style';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <Container>
            <Navigation>
                <li><Link className="navigation__menu__link" to="/">Inicio</Link></li>
                <li><Link className="navigation__menu__link" to="/episodios">Episódios</Link></li>
                <li><Link className="navigation__menu__link" to="/personagens">Personagens</Link></li>
            </Navigation>
        </Container>
    )
}

export default Header;