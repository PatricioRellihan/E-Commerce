import {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nombre: "Nombre producto",
                foto: "http://placehold.it/400x600",
                descripcion: "descripcion del producto",
                precio: 400
            })
        }, 2000);
    });

    useEffect(() => {
        getProduct.then(response => setProduct(response));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                <ItemDetail item={product} /> 
                </div> :
                <p>Cargando producto...</p>
            }
        </>

    )
}

export default ItemDetailContainer;