import {FaShoppingCart} from 'react-icons/fa'
import {useContext, useState} from 'react';
import './NavCart.css';
import {Store} from '../../../Store';
import CartWidget from '../CartWidget/CartWidget'

const NavCart = ({action}) => {
    const [data, setData] = useContext(Store);

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <div className="navCart" onClick={openWidgetCart}>
            <FaShoppingCart size='20' className='navCartIcon' />
            <span>{data.cantidad}</span>
            <CartWidget show={showWidgetCart} action={openWidgetCart} />
        </div>
    )
}

export default NavCart;