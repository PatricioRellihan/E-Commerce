import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import productsDB from '../DataBase/db'


const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log(id)

    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoClickeado = productsDB.find(product => product.id == id)
            resolve(productoClickeado
            //     {
            //     id: id,
            //     nombre: "Nombre producto",
            //     foto: "http://placehold.it/400x600",
            //     descripcion: "descripcion del producto",
            //     precio: 500
            // }
            )
        }, 2000);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            {
                product ?
                <div className="container">
                <ItemDetail item={product} />
                <section>
                        El id del producto seleccionado es: {id}
                </section> 
                </div> :
                <p>Cargando producto...</p>
            }
        </>

    )
}

export default ItemDetailContainer;