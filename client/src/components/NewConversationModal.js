import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { contacts } from '../contexts/ContactsProvider'

export default function NewConversationModal({closeModal}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Conversation</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
