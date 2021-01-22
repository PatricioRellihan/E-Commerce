import {useEffect, useState, useContext}  from 'react';
import {Store} from '../../../Store'
import productsDB from "../../DataBase/db";
import {Link} from 'react-router-dom'


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
          data.items.map(item => <div key={item.id}><h2>{item.titulo}</h2><img src={item.rutaImagen} alt={item.titulo} /><p>${item.precio}</p></div>)
        }
        <Link to="/checkout">Finalizar compra</Link>
    </div>
    )
}
 
export default CartContainer;