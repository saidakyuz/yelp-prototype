import { Container, Col, Row} from "react-bootstrap"
import {Link} from "react-router-dom"
import Logo from "../images/logo.png";


function Footer(){

    return(
        <Container fluid className="footer justify-content-md-center">
            <Row className="justify-content-md-center container" id="footerbox">
                <Col sm>
                    <h5><a href="#">Partners</a></h5>
                    <h5><a href="#">Collaborators</a></h5>
                    <h5><a href="#">About</a></h5>
                </Col>
                <Col sm>
                    
                    <Link className='navbar-brand' to='/'>
                        <img
                        id="logoheader"
                        alt="logoimg"
                        src={Logo}
                        />
                    </Link>
                </Col>
                <Col sm>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Policy</a></li>
                        <li><a href="#">Newsletter</a></li>
                    </ul>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Footer
