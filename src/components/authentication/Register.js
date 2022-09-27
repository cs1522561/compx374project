import React, {useRef, useState} from 'react'
import {Card, Button, Form, Col, Row, Alert, Container} from 'react-bootstrap'

import { useAuth } from './contexts/AuthContexts'
import CountrySelect from 'react-bootstrap-country-select';
import {Link, useNavigate} from 'react-router-dom'

import './styles/authentication.css'

export default function Register() {
    //Create constants
    const emailReference = useRef()
    const forenameReference = useRef()
    const surnameReference = useRef()
    const passwordReference = useRef()
    const passwordConfirmReference = useRef()
    const {register, currentUser} = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [countryReference, setCountry ] = useState(null);
    const navigate = useNavigate()
    const [branchReference, setBranch] = useState(null)

    //function to submit to the authentication service
    async function submitHandle(e) {
        e.preventDefault()
        setError('')
        //check if the two passwords match
        if (passwordReference.current.value !== passwordConfirmReference.current.value) {
            return setError('Passwords do not match')
        }
        if (countryReference === null) {
            return setError('Country is empty')
        }
        try {
            setError('')
            setLoading(true)
            await register(emailReference.current.value, passwordConfirmReference.current.value, forenameReference.current.value, surnameReference.current.value, countryReference, branchReference)
            console.log(currentUser);
            navigate('/user-profile')
            
        }
        catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    const handleBranchChange = (e) => {
        setBranch(e.target.value)
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '70.8vh', paddingTop: '110px'}}>
            <div className='w-100' style={{maxWidth: '480px'}}>
                <Card>
                    <Card.Body>
                        <h1 className='text-center mb-4'>Sign Up</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={submitHandle}>
                            <Form.Group id='email' className='paddingBottom'>
                                <Form.Control type='email' required ref={emailReference} placeholder='Email' margin='dense'></Form.Control>
                            </Form.Group>
                            <Row className='mb-3'>
                                <Form.Group id='forename' as={Col}>
                                    <Form.Control type='text' required ref={forenameReference} placeholder='First Name'></Form.Control>
                                </Form.Group>
                                <Form.Group id='surname' as={Col}>
                                    <Form.Control type='text' required ref={surnameReference} placeholder='Last Name'></Form.Control>
                                </Form.Group>
                            </Row>
                            <Form.Group id='password' className='paddingBottom'>
                                <Form.Control type='password' required ref={passwordReference} placeholder='Password'></Form.Control>
                            </Form.Group>
                            <Form.Group id='passwordConfirm' className='paddingBottom'>
                                <Form.Control type='password' required ref={passwordConfirmReference} placeholder='Confirm Password'></Form.Control>
                            </Form.Group>
                            <Form.Group id='country' className='paddingBottom'>
                                <CountrySelect value={countryReference} onChange={setCountry} matchNameFromStart={false} matchAbbreviations required/>
                            </Form.Group>
                            <Form.Group id='branch'>
                                <Form.Label>Select Branch</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Driving"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            required
                                            onChange={handleBranchChange}
                                            value='Driving'
                                        />
                                        <Form.Check
                                            inline
                                            disabled
                                            label="Engineering"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            required
                                            onChange={handleBranchChange}
                                            value='Engineering'
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                            <Form.Group>
                                <Button disabled={loading} className='w-100' type='submit'>Sign Up</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Already have an account? <Link to='/login'>Log In.</Link>
                </div>
            </div>
        </Container>
    )
}
