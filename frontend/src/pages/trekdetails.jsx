import React, { useEffect, useState } from "react";
import { useParams,Navigate } from "react-router-dom";
import axios from "axios";
import { Row, Col, Container, Image, ListGroup, Button} from "react-bootstrap";
import Header from "../components/header";
import { FaCloudSun } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { PiPersonSimpleHikeBold } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa";
import Booking from "../components/booking";
import { MDBContainer,MDBCard,MDBCardBody,MDBInput,MDBRow,MDBCardFooter,MDBCardImage } from "mdb-react-ui-kit";

const TreksDetails = () => {

    // const {book,dispatch}=useBook();
    const [treks, setTrek] = useState({});
    const { trekid } = useParams();
useEffect(() => {
    axios
        .get("/api/treks/home?trekId=" + trekid)
        .then((resp) => setTrek(resp.data))
        .catch((err) => console.log(err.message));
    }, []);


    return (
        <>
        <Header/>
        <Container>
            <Row>
                <h2 style={{textAlign: "center", paddingTop: "15px" , paddingBottom: "15px", font: "revert-layer" }}>
                    {treks.name}
                </h2>
                <Row>
                    <Image src={treks.photo1} />
                    </Row>
                <Col>
                    <ListGroup>
                    <ListGroup.Item>
                        {treks.description} 
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item>
                        <Image src={treks.photo2} />
                        <br />
                        <h3>Itinerary</h3>
                        {treks.guide}
                    </ListGroup.Item>
                    <br />
                    <h6>
                            <div className="d-flex flex-row mb-3">
                            <div className="p-4">
                                <FaCloudSun /> Best Season <br />
                                {treks.bestTime}
                                </div>

                                <div className="p-4">
                                <FaMountain />Max Altitude <br />
                                {treks.altitude}m
                                </div>

                                <div className="p-4">
                                <PiPersonSimpleHikeBold />Difficulty <br />
                                {treks.difficulty} 
                                </div>

                                <div className="p-4">
                                <LuCalendarDays />Duration <br />
                                {treks.duration} days
                                </div>

                                <div className="p-4">
                                <FaDollarSign />Cost <br />
                                ${treks.price} per person
                                </div>
                            </div>
                    </h6>

                <Booking/>

                <MDBCardFooter className="mb-4 mb-lg-0" >    
                    <MDBCardBody>
                        <p>
                        <strong>We accept</strong>
                        </p>
                        <MDBCardImage className="me-2" width="50px"
                        src="/icons/Esewa.webp"
                        alt="E-sewa" />
                        <MDBCardImage className="me-2" width="50px"
                        src="/icons/fonepay.jpg"
                        alt="Fone-pay" />
                        <MDBCardImage className="me-2" width="50px"
                        src="/icons/ime.jpg"
                        alt="IME-pay" />
                        <MDBCardImage className="me-2" width="50px"
                        src="/icons/khalti.jpg"
                        alt="khalti" />
                    </MDBCardBody>
                    </MDBCardFooter>

                </ListGroup>
                </Col>
        </Row>
        </Container>
    </>
    );
};

export default TreksDetails;

