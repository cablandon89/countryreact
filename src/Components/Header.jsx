import {useState} from 'react'
import {Link, useHistory } from 'react-router-dom'
import {Navbar, Form, FormControl, Button, Container} from 'react-bootstrap';
import './Styles/Header.css';

const Header = () => {
  const [search, setSearch] = useState('')
  const history = useHistory();

  const findSearch = () => {
    if(search !== ""){
      history.push("/search/"+ search);
      setSearch("");
    }else{
      alert('Search is empty');
    }
    
  }
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Link className="link" to="/"><img src="/assets/img/logo.png" width="50px" alt="logo"/>Countries</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search a country"
              className="me-2"
              aria-label="Search"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
            <Button variant="dark" onClick={findSearch} >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;