import './Nav.css'
import '../../../reset.css'
import NavItem from './NavItem'
import {FaSearch} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'

function Nav({title}) {

    return (
        <header>
            <div className='container'>
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
                    <li><a href='#'><FaSearch size='20' /></a></li>
                    <li><a href='#'><FaShoppingCart size='20' /></a></li>
                    <li><a href='#'><FaUser size='20' /></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Nav;