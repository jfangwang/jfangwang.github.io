import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Container fluid>
        <Navbar />
        <section className='intro' style={{ height: '100vh' }}>
          <h2>Hi! I'm Jonathan Wang but people call me Jonny.</h2>
          <h2>Also I'm a Software Engineer.</h2>
        </section>
        <section style={{ height: '100vh' }}>
          <h1>Work</h1>
        </section>
      </Container>
      {/* <div className='parallax1' /> */}
    </>
  );
}

export default App;
