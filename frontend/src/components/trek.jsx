import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Treks({treks}){
    return (
        <>
        <br />
            <Card style={{width: "30.13rem", height: "25rem", borderRadius: "7%"}} >
                <Card.Body>
                <Card.Title> {treks.name} </Card.Title>
                </Card.Body>
                <Link to={`/treks/${treks._id}`} >
                <Card.Img variant="top" src={treks.image} style={{width: "30rem", height: "18rem"}} />
                </Link>
                <Card.Body>
                <Card.Text>
                    <h6>
                        ${treks.price}
                    </h6>
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Treks;