import { Container, Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from "../components/images/logo.png";


function Footer(){
    
    return(
        <Container >
            <Row className="justify-content-md-center">
                <Col sm>
                    <Link className='navbar-brand' to='/'>
                        <img 
                        id="logoimg" 
                        alt="logoimg"
                        src={Logo} 
                        />
                    </Link>
                </Col>
                <Col sm>
                    <h5>Partners</h5>
                    <h5>Collaborators</h5>
                    <h5>About</h5>
                </Col>
                <Col sm>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                </Col>
            </Row>
            <Row>
            © 2021 _ Design and built with lot of love :)
            </Row>
        </Container>
    )
}

export default Footer