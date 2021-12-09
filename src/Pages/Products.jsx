import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import "../Styles/style.css"
import { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import SingleProduct from './SingleProduct';
import Footer from '../Components/Footer';
// import about from "../Images/about.jpg"
const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [hasError, sethasError] = React.useState(false);

    const getData = () => {
        axios
            .get("https://usman-recipes.herokuapp.com/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
                sethasError(true);
            });

    };

    React.useEffect(function () {
        console.log("Sending Ajax call");
        getData();
    }, []);
    return (
        <div>
            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center">
                        <h3>Our Products</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="product-menu">
                <Row>
                    <Col xs={3} className="pro-menu-col ">
                    <Button as={Link} to="/products/create"variant="outline-danger" className="add-pr mx-2">Add Product</Button>{' '}
                    
                    </Col>
                    
                </Row>
            </Container>
            {products.length === 0 && !hasError && <p>Loading...</p>}
            {hasError && <p>Something Wrong Happened</p>}
            {products.map((p) => (
                <SingleProduct product={p} onDelete={getData}/>
                ))}
            <Footer/>

        </div>
    );
}

export default Products;