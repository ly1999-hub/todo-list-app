import React from 'react';


import FormInput from "./formLogin";
import Products from "../pages/products";
import Home from "../pages/home";
import Cart from "../pages/cart";
import User from "../pages/user";
import { CartContext} from "../context/cart";
import './menu.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//import { Cart } from 'reactstrap';

const Login=FormInput;
class menu extends React.Component{
    render(){
        return(
            <Router>
                <div className="menu-body">
                    <ul className="nav menu-Top">
                        <li className="nav-item"> 
                            <Link to="/home" className="nav-link Link-menu" >Home</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="/products" className="nav-link Link-menu">Products</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="/user" className="nav-link Link-menu"> User</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="/login" className="nav-link Link-menu"> login</Link>
                        </li>
                        <li className="nav-item"> 
                            <CartContext.Consumer>
                                {({cartItems})=> <Link to="/cart/" className="nav-link Link-menu"><AiOutlineShoppingCart  size="30px" color="#ffffff"/>  ({cartItems.length})</Link>}
                            </CartContext.Consumer>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/cart/">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default menu ;