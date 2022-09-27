import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert, Container} from 'react-bootstrap'

import { useAuth } from './contexts/AuthContexts'
import {Link, useNavigate} from 'react-router-dom'

import './styles/authentication.css'

export default function ForgotPassword() {
    //Create constants
    const emailReference = useRef()
    const {resetPassword} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    

    //function to submit to the authentication service
    async function submitHandle(e) {
        e.preventDefault()
        setError('')
        try {
            setError('')
            setMessage('')
            setLoading(true)
            console.log(emailReference.current.value)
            await resetPassword(emailReference.current.value)
            setMessage('Check you inbox for futher instructions')
        }
        catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '70.8vh'}}>
        <div className='w-100' style={{maxWidth: '480px'}}>
            <Card>
                <Card.Body>
                    <h1 className='text-center mb-4'>Reset Password</h1>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={submitHandle}>
                        <Form.Group id='email' className='paddingBottom'>
                            <Form.Control type='email' required ref={emailReference} placeholder='Email' margin='dense'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Reset Password</Button>
                        </Form.Group>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/login'>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/register'>Register</Link> now.
            </div>
        </div>
        </Container>
    )
}
