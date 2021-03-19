import './App.css';
import SearchBar from './components/searchBar'
import { Container } from 'react-bootstrap';
import Logo from './components/images/logo.png';

function Header () {
    return(
        <Container className="header">
            <nav>

                <img 
                id="logoimg"
                alt="logoimg" 
                src={Logo} />

            </nav>
            <SearchBar/>           
        </Container>
    )
}

export default SearchBar;
