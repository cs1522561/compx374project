import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert, Container} from 'react-bootstrap'

import { useAuth } from './contexts/AuthContexts'
import {Link, useNavigate} from 'react-router-dom'

import './styles/authentication.css'

export default function Login() {
    //Create constants
    const emailReference = useRef()
    const passwordReference = useRef()
    const {login} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    //function to submit to the authentication service
    async function submitHandle(e) {
        e.preventDefault()
        setError('')
        
        try {
            setError('')
            setLoading(true)
            await login(emailReference.current.value, passwordReference.current.value)
            navigate('/user-profile')
        }
        catch (err) {
            console.log(err)
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '70.8vh', paddingTop: '110px'}}>
        <div className='w-100' style={{maxWidth: '480px'}}>
            <Card>
                <Card.Body>
                    <h1 className='text-center mb-4'>Login</h1>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={submitHandle}>
                        <Form.Group id='email' className='paddingBottom'>
                            <Form.Control type='email' required ref={emailReference} placeholder='Email' margin='dense'></Form.Control>
                        </Form.Group>
                        <Form.Group id='password' className='paddingBottom'>
                            <Form.Control type='password' required ref={passwordReference} placeholder='Password'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Button disabled={loading} className='w-100' type='submit'>Login</Button>
                        </Form.Group>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/forgot-password'>Forgot password?</Link>
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
