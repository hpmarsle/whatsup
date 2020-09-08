import React, { useRef } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()
    
    return (
        <Container className='align-items-center d-flex'>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
        </Container>
    )
}
