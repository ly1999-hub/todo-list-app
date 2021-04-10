import React from "react";
import { CartContext} from "../context/cart";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row,Col
  } from 'reactstrap';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <CartContext.Consumer>
                    {({cartItems})=><Row className="pt-3">
                        {cartItems.map((product,index)=>(
                        <Col sm="4" className="pt-3" key={index}>
                            <Card>
                                <CardImg
                                top 
                                width="100%" 
                                src={product.url_img} />
                                <CardBody>
                                    <CardTitle tag="h5">{product.title}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button className="float-right mr-3" >view</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        ))}
                        </Row>}
                    </CartContext.Consumer>
            </div>
        )
    }
}

export default Cart;