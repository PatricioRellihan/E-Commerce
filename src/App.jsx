import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/general/nav/NavBar'
import ItemListContainer from './components/general/ItemListContainer'


function App() {

  return (
    <>
    <NavBar title='GG' />

    <ItemListContainer greeting='Aca va a ir la lista!' />
    </>
  )
}

export default App;

