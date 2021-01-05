import { useHistory } from 'react-router-dom';

const ItemDetail = ({item}) => {

    let historialRutas = useHistory();

    const handleClickAddToCart = e => {
        alert("Agregaste un producto a tu carrito!")
        historialRutas.push("/cart")
    }

    return(
        <article>
            <h1>{item.titulo}</h1>
            <img src={item.rutaImagen} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button onClick={handleClickAddToCart} >Agregar al carrito</button>
        </article>
    )
}

export default ItemDetail;