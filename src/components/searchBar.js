import { Container, Form, Button, FormControl } from 'react-bootstrap'
import '../App.css';
import data from '../mock-data.json';
import {useEffect} from 'react';

const SearchBar = (props) => {
    useEffect(async () => {
       const res = await fetch(data)
       console.log(res);
       const data = await res.json();
       console.log(data)
    }, [])
    return(
        <Container>
            <Form>
                <FormControl type="text" placeholder="Search" className="searcher" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
    )
}

export default SearchBar;