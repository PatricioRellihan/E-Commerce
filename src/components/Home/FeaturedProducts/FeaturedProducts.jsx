import {useState} from 'react';
import ProductCard from "../../general/ProductCard/ProductCard";
import "./FeaturedProducts.css"


const FeaturedProducts = () => {

    const [items, setItems] = useState([]);

    return (
        <section className="featuredProducts">
            <div className="container">
                    <h2>Productos destacados</h2>

                    <ul className="featuredProducts">
                        <li><ProductCard titulo="Doom Eternal" precio="500" rutaImagen="/img/covers/cover_doom_eternal.jpg" /></li>
                        <li><ProductCard titulo="Journey" precio="300" rutaImagen="/img/covers/cover_journey.jpg" /></li>
                        <li><ProductCard titulo="Hollow Knight" precio="750" rutaImagen="/img/covers/cover_hollow_knight.jpg" /></li>
                        <li><ProductCard titulo="Titanfall 2" precio="100" rutaImagen="/img/covers/cover_titanfall2.jpg" /></li>
                    </ul>
            </div>
        </section>
    )

}

export default FeaturedProducts;