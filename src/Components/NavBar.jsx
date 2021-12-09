import React from 'react'
import "../Styles/style.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from "../Pages/Products"
import ProductForm from "../Pages/ProductForm"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <Router>

                <Navbar bg="light" variant="light" className="navbar">
                    <Container className="nav-container">
                        <Navbar.Brand className="nav-brand">Coffee Bar</Navbar.Brand>
                        <Nav className="ms-auto ul" >
                            <Nav.Link className="li" as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link className="li" as={Link} to="/about">About</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products/create" element={<ProductForm />} />
                    <Route path="/products/edit/:id" element={<ProductForm />} />
                    {/* <Route path="/products/details/:id" element={<ProductDetails />} /> */}


                </Routes>
            </Router>
        </>
    );
}

export default NavBar;