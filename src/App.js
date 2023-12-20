import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import Login from './components/login/Login';
import Home from './components/login/Login';
import Delivery from './components/delivery/Delivery'
import About from './components/aboutus/About'
import Categories from "./components/MainPage/Categories"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { productItems } = Data
  const { shopItems } = Sdata

  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/login" component={Login}>
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/delivery" component={Delivery}>
            
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/category/:name" component={Categories} />
          <Route path="/" exact>
            {isAuthenticated ? <Home /> : <Redirect to="/login" />}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
