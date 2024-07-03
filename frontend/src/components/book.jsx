import Card from 'react-bootstrap/Card';

function Books({books}){
    return (
        <>
        <br />
            <Card style={{width: "30.13rem", height: "25rem", borderRadius: "7%"}} >
            
                <Card.Body>
                <Card.Text>
                    <h6>
                        {books.qty} people
                        <br />
                        starting date: {books.start} 
                    </h6>
                </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Books;