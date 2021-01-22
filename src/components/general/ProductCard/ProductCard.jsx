import {useState, useContext} from 'react';
import './ProductCard.css';
import { Link, useHistory } from 'react-router-dom'
import {Store} from '../../../Store'

const ProductCard = ({item}) => {
    const [data, setData] = useContext(Store)
    const [qty, setQty] = useState(1);
    const stock = 5;

    const handleClickResta = () => {
        if(qty > 1) {
            setQty(qty - 1);
        }
    }

    let history = useHistory();
    const onAdd = () => {
        alert(`Agregaste ${qty} productos al carrito`);
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
            precioTotal: data.precioTotal + (data.precio * qty),
        });
        console.log(data)
        history.push("/cart")
    }

    return (
        <article>
            <img className="card-img-top" src={item.rutaImagen} alt="Foto del producto"/>
            <div className="card-body">
                <h3 className="card-title">{item.titulo}</h3>
                <div className="qty">
                    <button className="btnSub"
                        disabled={qty === 1 ? 'disabled' : null } 
                        onClick={handleClickResta}
                    >
                        -
                    </button>
                    <input type="text" value={qty} readOnly/>
                    <button className="btnAdd" onClick={() => setQty( qty<stock ? qty + 1 : qty)}>+</button>
                </div>
                <p>${item.precio}</p>

                <button id="agregarAlCarrito" onClick={onAdd}>Agregar al carrito</button>
                <button><Link to ={`/detail/${item.id}`}>Ver más</Link></button>
            </div>
        </article>
    )
}

export default ProductCard;