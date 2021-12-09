import React from 'react'
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import about from "../Images/about.jpg"
import "../Styles/style.css"
import Footer from '../Components/Footer';
const About = () => {
    return (
        <div>
        <Container fluid className="about-container"> 
            <Row>
                <Col className="about-col col-12 col-md-6">
                <Image src={about} fluid className="aboutimg rounded mx-auto d-block "/>
                </Col>
                <Col className="about-heading col-12 col-md-6">
                    <div className="heading">
                    <h4>
                    About Us
                    </h4>
                    <h2>We Leave A Delicious Memory For You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at perferendis ad libero natus odit, beatae architecto? Quibusdam eaque, fugit laborum dolor autem, tenetur mollitia libero laboriosam enim molestias non.
                    Et labore quia nam, iure est dolores excepturi minima error quas, beatae, quae dicta praesentium perspiciatis ducimus. Repellat ex fugiat aspernatur et, itaque suscipit corporis laboriosam eveniet sint magni odit!
                    Ipsum molestiae pariatur temporibus. Blanditiis nihil quisquam commodi unde repellat maxime voluptas voluptate explicabo sequi nostrum odio laudantium sit, corporis illo nam aspernatur, iure enim quis! Expedita similique veritatis rem.</p>
                    <Button variant="outline-warning"  className="about-btn">Read More</Button>{' '}
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </div>
    );
}

export default About;