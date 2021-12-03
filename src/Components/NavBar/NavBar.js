import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import { Link } from "react-router-dom";
const navstyle = {
  color: 'white'
}
const NavBar = ({ addMovie }) => {
  return (
    <div>
      <Navbar bg="bleu" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Movies App</Navbar.Brand>
          
            <Link style={navstyle} to="/Home" >Home</Link>
            {/* <Nav.Link to="/Home" tag={Link}>Home</Nav.Link> */}
            {/* <Link to="/Home"> TEST </Link> */}
            {/* <Nav.Link to="/list-of-movies" tag={Link}>List of movies</Nav.Link> */}
            <Link style={navstyle} to="/list-of-movies" >List of movies</Link>
            <Link style={navstyle} to="/pricing" >Favorite movies</Link>
          

          <AddMovie addMovie={addMovie} />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
