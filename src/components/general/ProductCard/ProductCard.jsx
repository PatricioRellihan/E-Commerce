import {useState} from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom'

const ProductCard = ({titulo, precio, rutaImagen, id}) => {
    const [qty, setQty] = useState(1);
    const stock = 5;

    const handleClickResta = () => {
        if(qty > 1) {
            setQty(qty - 1);
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${qty} productos al carrito`);
    }

    return (
        <article className="card">
            <img className="card-img-top" src={rutaImagen} alt="Foto del producto"/>
            <div className="card-body">
                <h3 className="card-title">{titulo}</h3>
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
                <p>${precio}</p>

                <button id="agregarAlCarrito" onClick={onAdd}>Agregar al carrito</button>
                <button><Link to ={`/detail/${id}`}>Ver más</Link></button>
            </div>
        </article>
    )
}

export default ProductCard;