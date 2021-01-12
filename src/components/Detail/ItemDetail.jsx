import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Store } from '../../Store';

const ItemDetail = ({item}) => {

    let history = useHistory();
    const [data, setData] = useContext(Store);
    const [qty, setQty] = useState(1);

    const handleClickAddToCart = e => {
        setData({
            ...data, 
            cantidad: data.cantidad + qty,
            items: [...data.items, item],
        });
        history.push("/cart")
    }

    const handleClickResta = () => {	
        if(qty > 1) {	
            setQty(qty - 1);	
        }	
    }	

    // return(
    //     <article>
    //         <h1>{item.titulo}</h1>
    //         <img src={item.rutaImagen} alt=""/>
    //         <p>{item.descripcion}</p>
    //         <p>{item.precio}</p>
    //         <button onClick={handleClickAddToCart} >Agregar al carrito</button>
    //     </article>
    // )

    return (
        <article className="product">
            <div className="foto">
                <img src={item.rutaImagen} alt=""/>
            </div>
            <div className="info">
                <h1 className="title">{item.titulo}</h1>
                {
                    !!item.description && <p className="description">{item.descripcion}</p>
                }
                <p className="price">${item.precio}</p>
                <div className="qty">	
                    <button 	
                        disabled={qty === 1 ? 'disabled' : null } 	
                        onClick={handleClickResta}	
                    >	
                        -	
                    </button>	
                    <input type="text" value={qty} readOnly/>	
                    <button onClick={() => setQty(qty + 1)}>+</button>	
                </div>
                <button className="btn" onClick={handleClickAddToCart}>Agregar al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail;