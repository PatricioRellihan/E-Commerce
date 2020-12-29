import 'bootstrap/dist/css/bootstrap.min.css'
import './reset.css'
import NavBar from './components/general/NavBar/NavBar'
import Home from './components/Home'
import Category from './components/Category'
import Error404 from './components/general/Error404'
import ItemDetailContainer from './components/Detail/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/Home/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
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
        {/* <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route> */}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;

