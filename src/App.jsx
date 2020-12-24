import 'bootstrap/dist/css/bootstrap.min.css'
import './reset.css'
import NavBar from './components/general/NavBar/NavBar'
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts'
import ItemDetailContainer from './components/Detail/ItemDetailContainer'


function App() {

  return (
    <>
    <NavBar title='GG' />

    <FeaturedProducts />

    <ItemDetailContainer />
    </>
  )
}

export default App;

