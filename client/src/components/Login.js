import React from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <Container className='align-items-center d-flex'>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control type="password" ></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}
