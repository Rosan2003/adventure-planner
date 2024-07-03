import {React,useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function Signup() {
    const [fullname,setName]=useState();
    const [email,setEmail]=useState();
    const [password, setPassword]=useState();

    const submit = (e)=>{
        e.preventDefault();
        axios
        .post('/api/users/signup',{fullname,email,password})
        .then((resp)=>{
            console.log(resp)
            window.alert("signup success");
            <Navigate to={'/login'} />
        })
        .catch((err)=> alert(err.resp.data.error));
    }
    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e)=> setName(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e)=> setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e)=> setPassword(e.target.value)} />
            
            <Button variant='dark' size='sm' onClick={submit} >Register </Button>

            <div>
                <p className="mb-0"> Already have an account? <Link to='/login' ><a href="#!" class="text-dark-50 fw-bold">  login</a></Link></p>
            </div>
            
        </MDBCardBody>
    </MDBCard>
    </MDBRow>
    </MDBContainer>
    );
}

export default Signup;