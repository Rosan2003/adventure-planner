import Books from '../components/book';
import {Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Header from '../components/header';

function BookingDisplay(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios
            .get('/api/bookings/booking')
            .then((resp)=> setData(resp.data))
            .catch((err) => console.log("Err", err))
    },[])
    return(
        <>
        <Header/>
        < Container style={{maxWidth: "100rem" }} >
                    <Row>
                        { data.map((b)=> {return(
                                <Col sm={12} md={4} key={b._id}>
                                <Books books={b} />
                                </Col>
                                );
                        })}
                    </Row>
        </Container>
        </>
    );
}

export default BookingDisplay;