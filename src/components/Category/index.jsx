import CategoryFilter from './CategoryFilter'
import {useParams} from 'react-router-dom';

const Category = () => {
    const {category_name} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'accion': return <><p>Estoy en accion</p><CategoryFilter category={category_name} /></>;
            case 'aventura': return <><p>Estoy en aventura</p><CategoryFilter category={category_name} /></>;
            case 'estrategia': return <><p>Estoy en estrategia</p><CategoryFilter category={category_name} /></>;
            case 'rpg': return <><p>Estoy en rpg</p><CategoryFilter category={category_name} /></>;
            case 'deportes': return <><p>Estoy en deportes</p><CategoryFilter category={category_name} /></>;
            default: return <><p>la categoría no existe</p><CategoryFilter category={category_name} /></>;
        }
    }

    return (
        <>
            {
               queCategoriaEs(category_name) 
            }
        </>
    )
}
export default Category;