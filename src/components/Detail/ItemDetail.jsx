

const ItemDetail = ({item}) => {

    return(
        <article>
            <h1>{item.titulo}</h1>
            <img src={item.rutaImagen} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button>Agregar al carrito</button>
        </article>
    )
}

export default ItemDetail;