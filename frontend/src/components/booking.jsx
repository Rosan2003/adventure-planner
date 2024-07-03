import {React,useState,} from "react";
import axios from "axios";
import { MDBContainer,MDBCard,MDBCardBody,MDBInput,MDBRow,MDBCardFooter,MDBCardImage } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

function Booking(){
    const [qty,setQty]= useState();
    const [start,setStart]=useState();
    const booked =(b)=>{
        b.preventDefault();
        axios
        .post('/api/bookings/book',{qty,start})
        .then((resp)=>{
            console.log(resp);
            window.alert("Your plan has been booked");
        })
    }
    return(
        <>
        <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{maxWidth: '300px'}}>
                <MDBCardBody className='px-9'>
                    <span>Number of persons</span>
                    <MDBInput wrapperClass="mb-7" defaultValue={1}  type='number' onChange={(b)=> setQty(b.target.value)} />
                    <span>Choose your date</span>
                    <MDBInput wrapperClass="mb-7" type="date" onChange={(b)=> setStart(b.target.value)} />

                    <br />
                    <Button variant="dark" size='sm'  onClick={booked} >
                        Book
                    </Button>

                </MDBCardBody>
                </MDBCard>
                </MDBRow>
                </MDBContainer>

        </>
    );
}

export default Booking;