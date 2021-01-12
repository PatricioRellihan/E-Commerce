import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './reset.css'
import NavBar from './components/general/NavBar/NavBar'
import Home from './components/Home'
import Error404 from './components/general/Error404'
import ItemDetailContainer from './components/Detail/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/Home/ItemListContainer/ItemListContainer'
import CartContainer from './components/general/Cart/CartContainer'
import {Store} from './Store/index'


function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
  }); 

  return (
    <>
    <Store.Provider value={[data, setData]}>

      <BrowserRouter>
        <NavBar title='GG' />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:category_name?">
            <ItemListContainer />
          </Route>
          <Route path="/detail/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
          {/* <Route path="/checkout">
            <Checkout />
          </Route> */}
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>

    </Store.Provider>
    </>
  )
}

export default App;

