import React from 'react'
import { Image, Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import home from "../Images/home.jpg"
import About from "../Pages/About"
import "../Styles/style.css"
const Home = () => {


    return (
        <div>

        <Container fluid className="home">
            <Row className="row">
                <Col md="auto" className="col">
                    <Image src={home} fluid className="frontimage"/>
                </Col>
            </Row>
            </Container>
            <About/>
        </div>
        
    );
}

export default Home;