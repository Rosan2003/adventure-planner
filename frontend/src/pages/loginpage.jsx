import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import useLogin from '../hooks/userlogin';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Login() {
    const {login} = useLogin();
    const {user} = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email,password);
    };
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    if(user){
        return <Navigate to='/home' />   
    }
    return (
    <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

            <MDBCard className='text-dark my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-dark-50 mb-5">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=> setEmail(e.target.value)} />

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-dark' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=> setPassword(e.target.value)} />

                <Button variant='dark' type='submit' onClick={handleSubmit} >
                    login
                </Button>
                
                <div>
                <p className="mb-0">Don't have an account? <NavLink to='/signup' ><a href="#!" class="text-dark-50 fw-bold">Sign Up</a></NavLink></p>
                </div>

            </MDBCardBody>
            </MDBCard>

        </MDBCol>
        </MDBRow>

    </MDBContainer>
    );
}

export default Login;