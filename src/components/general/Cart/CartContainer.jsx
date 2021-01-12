import {useEffect, useState, useContext}  from 'react';
import {Store} from '../../../Store'
import productsDB from "../../DataBase/db";


const CartContainer = () => {

    const [data, setData] = useContext(Store);
    // const [products, setProducts] = useState([]);

    // const getProducts = new Promise ((resolve,reject)=>{
    //   setTimeout(() => {
    //     resolve(productsDB);
    //   }, 1000)
    // })
    // useEffect(() => {
    //   getProducts.then(rta=>setProducts(rta))
    // }, [])

    // console.log(products)

    return ( 

    <div className="container">
        <h1>Tu Carrito</h1>
        {
          data.items.map(item => <><h2>{item.titulo}</h2><img src={item.rutaImagen} alt={item.titulo} /><p>${item.precio}</p></>)
        }
    </div>
    )
}
 
export default CartContainer;