import './NavBar.css'
import {FaShoppingCart, FaSearch, FaUser} from 'react-icons/fa'
import NavItem from '../NavItem/NavItem'
import Container from 'react-bootstrap/Container'
import { Link, useHistory } from 'react-router-dom'


function NavBar({title}) {

    let history = useHistory();
    const onAdd = () => {
        history.push("/cart")
    }

    return (
        <header>
            <Container>
                <h1><Link to="/">{title}</Link></h1>

                <nav>
                    <ul>
                        <NavItem text="Acción" url='/category/accion' />
                        <NavItem text="Aventura" url='/category/aventura' />
                        <NavItem text="Estrategia" url='/category/estrategia' />
                        <NavItem text="RPG" url='/category/rpg' />
                        <NavItem text="Deportes" url='/category/deportes' />
                    </ul>
                </nav>

                <ul>
                    <li>
                        <a href='#'><FaSearch size='20' /></a>
                    </li>
                    <li>
                        <a href='#' onClick={onAdd}><FaShoppingCart size='20' /></a>
                    </li>
                    <li>
                        <a href='#'><FaUser size='20' /></a>
                    </li>
                </ul>
            </Container>
        </header>
    )
}

export default NavBar;