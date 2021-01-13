import './CartWidget.css'
import {useContext} from 'react'
import {Store} from '../../../Store'

const CartWidget = ({show, action}) => {

    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.items.map(item => <div key={item.id}><p>{item.titulo}</p><img src={item.rutaImagen} className='cartWidgetImg' /></div>)
            }
            <button onClick={action}>Salir</button>
        </div>
    )
}

export default CartWidget

