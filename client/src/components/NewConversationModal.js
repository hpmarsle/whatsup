import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function NewConversationModal({closeModal}) {
    const idRef = useRef()
    const nameRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}