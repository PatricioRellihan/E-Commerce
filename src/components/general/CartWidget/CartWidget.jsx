import {FaShoppingCart} from 'react-icons/fa'

const CartWidget = ({url='#'}) => {
    return (
        <li>
            <a href={url}><FaShoppingCart size='20' /></a>
        </li>
    )
}

export default CartWidget

