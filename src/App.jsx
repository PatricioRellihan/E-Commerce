import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/general/NavBar/NavBar'
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts'


function App() {

  return (
    <>
    <NavBar title='GG' />

    <FeaturedProducts />
    </>
  )
}

export default App;

