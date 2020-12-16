import {useState, useEffect} from 'react';
import ProductCard from "../../general/ProductCard/ProductCard";
import "./FeaturedProducts.css"


const FeaturedProducts = () => {

    const [items, setItems] = useState([]);

    const products = [
        {
            id: 1,
            titulo: 'Doom Eternal',
            precio: 500,
            rutaImagen: "/img/covers/cover_doom_eternal.jpg",
        },
        {
            id: 2,
            titulo: 'Journey',
            precio: 300,
            rutaImagen: "/img/covers/cover_journey.jpg",
        },
        {
            id: 3,
            titulo: 'Hollow Knight',
            precio: 600,
            rutaImagen: "/img/covers/cover_hollow_knight.jpg",
        },
        {
            id: 4,
            titulo: 'Titanfall 2',
            precio: 247,
            rutaImagen: "/img/covers/cover_titanfall2.jpg",
        },
    ]

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })

    return (
        <section className="featuredProducts">
            <div className="container">
            {
                items.length ?
                <>
                    <h2>Productos destacados</h2>

                    <ul className="featuredProducts">
                        {
                             items.map(item => (
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
                {/* <h2>Productos destacados</h2>

                <ul className="featuredProducts">
                    <li><ProductCard titulo="Doom Eternal" precio="500" rutaImagen="/img/covers/cover_doom_eternal.jpg" /></li>
                    <li><ProductCard titulo="Journey" precio="300" rutaImagen="/img/covers/cover_journey.jpg" /></li>
                    <li><ProductCard titulo="Hollow Knight" precio="750" rutaImagen="/img/covers/cover_hollow_knight.jpg" /></li>
                    <li><ProductCard titulo="Titanfall 2" precio="100" rutaImagen="/img/covers/cover_titanfall2.jpg" /></li>
                </ul> */}
            </div>
        </section>
    )
   
}

export default FeaturedProducts;