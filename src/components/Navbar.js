import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './Navbar.css';
import Home from '../Home';
import Github from '../images/github-logo.png';
import Instagram from '../images/instagram-logo.png';
import Linkedin from '../images/linkedin.png';
import Snapchat from '../images/snapchat-logo.png';
import Twitter from '../images/twitter-logo.png';
import Facebook from '../images/facebook-logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navigation_bar() {
  return (
    <>
    <Navbar collapseOnSelect className="navbar" fixed="top" bg="success" expand="md" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Jonathan Wang</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          {/* <Nav.Link href="#blog">Blog</Nav.Link> */}
          {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
          <Nav.Link href="https://github.com/jfangwang"><img className="github" src={Github}></img></Nav.Link>
          <Nav.Link href="https://www.instagram.com/jfangwang/"><img className="instagram" src={Instagram}></img></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jonny-wang-16993b135/"><img className="linkedin" src={Linkedin}></img></Nav.Link>
          <Nav.Link href="https://www.snapchat.com/add/jfangwang"><img className="snapchat" src={Snapchat}></img></Nav.Link>
          <Nav.Link href="https://mobile.twitter.com/jfangwang"><img className="twitter" src={Twitter}></img></Nav.Link>
          <Nav.Link href="https://www.facebook.com/jonny.wang.5074"><img className="facebook" src={Facebook}></img></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default Navigation_bar;
