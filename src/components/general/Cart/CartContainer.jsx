import React, {useEffect, useState}  from 'react';
import productsDB from "../../DataBase/db";


const CartContainer = () => {
    const [products, setProducts] = useState([]);

    const getProducts = new Promise ((resolve,reject)=>{
      setTimeout(() => {
        resolve(productsDB);
      }, 1000)
    })
    useEffect(() => {
      getProducts.then(rta=>setProducts(rta))
    }, [])

    console.log(products)

    return ( 
    <>
    <div className="container">
        <h2>Tu Carrito</h2>
    </div>
    <div className="container" >
        <table>
            <thead>
            {
            products.length ?
            <>
            {products.map((product, index) => (
            <>
            <tr>
                <img src={product.rutaImagen} alt={product.titulo} width="50%"/>
                <h3>{product.titulo}</h3>
            </tr>            
            </>
            ))}             
            </> :
            <>
            <p>Cargando tu carrito de compras</p>
            </>
            }
                
            </thead>
        </table>
            
    </div>
    </>
    );
}
 
export default CartContainer;