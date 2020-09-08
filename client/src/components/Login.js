import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {
    const idRef = useRef()
    
    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button type='submit'>Login</Button>
                <Button variant='secondary'>Create a New Id</Button>
            </Form>
        </Container>
    )
}
