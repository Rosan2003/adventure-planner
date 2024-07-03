import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink}  from 'react-router-dom';
import { Button, } from 'react-bootstrap';
import {useAuth} from '../hooks/useAuth';

function Header() {
    const {user,setUser} = useAuth();
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <img src="/AP/2.jpg"  alt='/AP/1.jpg' style={{width: "9rem", height: "4rem"}} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink to='/home' >
                <Button variant='light'>
                Home
                </Button>
            </NavLink>
            <NavLink to='/login' >
                    <Button variant='light' style={{marginLeft: "20px", marginRight: "20px"}} onClick={()=>{
                        localStorage.removeItem("token");
                        setUser(null);
                        }} >
                        logout
                    </Button></NavLink>
            </Nav>
            <NavLink to='/booking' >
                <Button variant='light'>
                my booking
                </Button>
            </NavLink>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;