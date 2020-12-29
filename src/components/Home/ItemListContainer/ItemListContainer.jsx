import {useState, useEffect} from 'react';
import ProductCard from "../../general/ProductCard/ProductCard";
import productsDB from '../../DataBase/db'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"


const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const {category_name} = useParams();

    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsDB);
        }, 2000)
    })

    const categoryProducts = () => {
        getProducts.then(
            (respuesta) => {
                if (category_name) {
                    const productByCategory = respuesta.filter(
                        (product) => product.category === category_name
                    );
                    setItems(productByCategory);
                }
                else {
                    setItems(respuesta)
                }
            })
    }

    useEffect(() => categoryProducts(), [category_name]);

    return (
        <section className="ItemListContainer">
            <div className="container">
            {
                items.length ?
                <>
                    <h2>Productos destacados</h2>

                    <ul className="ItemListContainer">
                        {
                             items.map(item => (
                                <li key={item.id} >
                                    <ProductCard 
                                        titulo={item.titulo} 
                                        precio={item.precio} 
                                        rutaImagen={item.rutaImagen}
                                        id={item.id}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                </> :
                <p className="cargando">Cargando items...</p>
            }
                {/* <h2>Productos destacados</h2>

                <ul className="ItemListContainer">
                    <li><ProductCard titulo="Doom Eternal" precio="500" rutaImagen="/img/covers/cover_doom_eternal.jpg" /></li>
                    <li><ProductCard titulo="Journey" precio="300" rutaImagen="/img/covers/cover_journey.jpg" /></li>
                    <li><ProductCard titulo="Hollow Knight" precio="750" rutaImagen="/img/covers/cover_hollow_knight.jpg" /></li>
                    <li><ProductCard titulo="Titanfall 2" precio="100" rutaImagen="/img/covers/cover_titanfall2.jpg" /></li>
                </ul> */}
            </div>
        </section>
    )
   
}

export default ItemListContainer;