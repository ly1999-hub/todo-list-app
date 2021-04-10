import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Row,Col
  } from 'reactstrap';

import axios from "axios";
import {CartContext} from "../context/cart";
class Products extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Products:[],
            };
    }

    componentDidMount(){
        axios.get('https://grtvo.sse.codesandbox.io/products').then(res=>{
           this.setState({
               Products:res.data
           })
        })
    }

    render (){
        const {Products}=this.state;
        return(
            <div className="container">
                <Row className="pt-3">
                    {Products.map((product,index)=>(
                    <Col sm="4" className="pt-3" key={index}>
                        <Card>
                            <CardImg
                            top 
                            width="100%" 
                            src={product.url_img} />
                            <CardBody>
                                <CardTitle tag="h5">{product.title}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CartContext.Consumer>
                                    {({addToCart})=><Button onClick={()=>addToCart(product)} className="ml-4">Add To Card</Button>}
                                </CartContext.Consumer>
                                <Button className="float-right mr-3" >view</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    ))}
                    </Row>
            </div>
        )
    }
}

export default Products;