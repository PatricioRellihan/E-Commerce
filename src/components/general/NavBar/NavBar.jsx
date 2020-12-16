import './NavBar.css'
import SearchWidget from '../SearchWidget/SearchWidget'
import CartWidget from '../CartWidget/CartWidget'
import UserWidget from '../UserWidget/UserWidget'
import NavItem from '../NavItem/NavItem'
import Container from 'react-bootstrap/Container'


function NavBar({title}) {

    return (
        <header>
            <Container>
                <h1><a href="#">{title}</a></h1>

                <nav>
                    <ul>
                        <NavItem text="Acción" url='#' />
                        <NavItem text="Aventura" url='#' />
                        <NavItem text="Estrategia" url='#' />
                        <NavItem text="RPG" url='#' />
                        <NavItem text="Deportes" url='#' />
                    </ul>
                </nav>

                <ul>
                    <SearchWidget url='#' />
                    <CartWidget url='#' />
                    <UserWidget url='#' />
                </ul>
            </Container>
        </header>
    )
}

export default NavBar;