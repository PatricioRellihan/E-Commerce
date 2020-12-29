import {useState, useEffect} from 'react';
import productsDB from '../DataBase/db';
import ProductCard from "../general/ProductCard/ProductCard";

const CategoryFilter = ({category}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsDB);
        }, 2000)
    })

    return (
        <section className="ItemListContainer">
            <div className="container">
            {
                items.length ?
                <>
                    <h2>{category}</h2>

                    <ul className="ItemListContainer">
                        {
                            
                             items.filter(item => item.category == {category})
                             .map(item => (
                                <li key={item.id}>
                                    <ProductCard 
                                        titulo={item.titulo} 
                                        precio={item.precio} 
                                        rutaImagen={item.rutaImagen}
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

export default CategoryFilter;
