import React from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router'
import { Container, Row, Col, Button, FloatingLabel, Form } from 'react-bootstrap';
const ProductForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const isEditing = id ? "true" : "false";

    React.useEffect(function () {
        if (isEditing)
            axios
                .get("https://usman-recipes.herokuapp.com/api/products/" + params.id)
                .then((res) => {
                    setProduct(res.data);
                })
                .catch((err) => {
                    console.log(err);

                });
    }, []);

    const [product, setProduct] = React.useState({
        name: "",
        price: "",
        color: "",
        department: "",
        description: "",
    });
    return (
        <div>

            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center mb-5">
                        <h3>Products Form</h3>
                    </Col>
                </Row>
            </Container>
            <FloatingLabel
                controlId="floatingInput"
                label="Product Name"
                className="mb-3 mx-5"

            >
                <Form.Control type="text" value={product.name}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, name: e.target.value });
                    }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInpur" className="mb-3 mx-5" label="Product Price">
                <Form.Control type="text" value={product.price}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, price: e.target.value });
                    }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInpur" className="mb-3 mx-5" label="Product Color">
                <Form.Control type="text" value={product.color}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, color: e.target.value });
                    }} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3 mx-5">
                <Form.Control as="textarea" value={product.description}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setProduct({ ...product, description: e.target.value });
                    }} />
            </FloatingLabel>
            <Button className=" ms-5 mt-2 mx-2" variant="outline-success" onClick={(e) => {
                //   setSending(true);
                axios.post("https://usman-recipes.herokuapp.com/api/products", product).then((res) => {
                    console.log(res.data);
                    //   setSending(false);
                    navigate("/products");
                }).catch((err) => {
                    console.log(err);
                });
            }}>Add</Button>
            <Button className="mt-2" variant="outline-success" onClick={(e) => {
                axios.put("https://usman-recipes.herokuapp.com/api/products/" + params.id, product).then((res) => {
                    console.log(res.data);
                    //   setSending(false);\\\\\\\\\\\
                    navigate("/products");
                }).catch((err) => {
                    console.log(err);
                });
            }}>
                Edit</Button>{' '}


        </div>
    )
}

export default ProductForm
