import '../App.css';
import SearchBar from './searchBar'
import { Container } from 'react-bootstrap';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function Header () {
    return(
        <Container className="header">
            <Link className='navbar-brand' to='/'>
                        <img
                        id="logoheader"
                        alt="logoimg"
                        src={Logo}
                        />
                    </Link>
            <div className="headertext">
               <h1> Check the best restaurants in your city</h1>
            </div>
            <SearchBar/>
        </Container>
    )
}

export default Header;
