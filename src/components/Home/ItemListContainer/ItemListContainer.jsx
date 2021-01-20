import {useState, useEffect} from 'react';
import ProductCard from "../../general/ProductCard/ProductCard";
// import productsDB from '../../DataBase/db'
import {getFirestore} from '../../DataBase'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {category_name} = useParams();

    const db = getFirestore();

    
    // const getProducts = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(productsDB);
    //     }, 2000)
    // })

    const getProducts = () => {
        db.collection('productos')
        // .where("outstanding", "==", true)
        .get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e))
    }
    

    // const categoryProducts = () => {
    //     getProducts.then(
    //         (respuesta) => {
    //             if (category_name) {
    //                 const productByCategory = respuesta.filter(
    //                     (product) => product.category === category_name
    //                 );
    //                 setItems(productByCategory);
    //             }
    //             else {
    //                 setItems(respuesta)
    //             }
    //         })
    // }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    return (
        <section className="ItemListContainer">
            <div className="container">
            {
                items.length ?
                <>
                    <h2>Productos destacados</h2>

                    <ul className="ItemListContainer">
                        {
                             items.map((item) => (
                                <li key={item.id} className="card">
                                    <ProductCard 
                                        item={item.data} 
                                        
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </> :
                <p className="cargando">Cargando items...</p>
            }
            </div>
        </section>
    )
   
}

export default ItemListContainer;