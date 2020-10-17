import React, { useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

export default function OpenConversation() {
    const [text, setText] = useState("")
    return (
        <div className="d=flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto">
                
                THIS WILL SHOW THE SELECTED CONVERSATION
            </div>
            <Form>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            as="textarea"
                            required
                            value={text}
                            onChange={e => setText(e.target.value)}
                            style={{height: '75px', resize: 'none'}}
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}
