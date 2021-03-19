import { Container, Form, Button, FormControl } from "react-bootstrap";
import "../App.css";
import data from "../mock-data.json";
import { useEffect } from "react";

const SearchBar = (props) => {
    useEffect(async () => {
    }, [])
    return(
        <Container>
            <Form className="searcher">
                <FormControl type="text" placeholder="What kind of food are you looking for?" />
                <FormControl type="text" placeholder="City"/>
                <Button variant="outline-success">Search</Button>
            </Form>
        </Container>
    )
}

export default SearchBar;
