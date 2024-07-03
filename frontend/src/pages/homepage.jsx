import Treks from '../components/trek';
import {Row, Col, Container} from 'react-bootstrap';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import './homepage.css';
import Header from '../components/header';

function Home(){
    const [data,setData] = useState([]);
    const a = useAuth();
    console.log(a);
    useEffect(()=>{
        axios
            .get('/api/treks/home')
            .then((resp)=> setData(resp.data))
            .catch((err) => console.log("Err", err))
    },[])
    return(
        <>
        <Header/>
        < Container style={{maxWidth: "100rem" }} >
                    <Row>
                        { data.map((t)=> {return(
                                <Col sm={12} md={4} key={t._id}>
                                <Treks treks={t} />
                                </Col>
                                );
                        })}
                    </Row>
        </Container>
        </>
    );
}

export default Home;