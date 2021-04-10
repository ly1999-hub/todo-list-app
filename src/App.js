import React from "react";
//import { Button } from 'reactstrap';
//import FormInput from "./components/formLogin";
//import Notification from "./components/Notification";
import './App.css';
import Menu from "./components/Menu";
import {CartProvider} from './context/cart';
//import { Router } from "react-router";

class App extends React.Component{
    render(){
    return(
    <CartProvider>  
      <div className="container-fluid">
        <Menu className="Menu" />
      </div>
    </CartProvider> 
    );
  };
};

export default App;
