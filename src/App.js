import './App.css';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  CardGroup,
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.jpg';
import first from '../src/assets/promocao.jpg';
import second from '../src/assets/promocao-02.jpg';
import third from '../src/assets/promocao-03.jpg';
import hortifruti from '../src/assets/hortifruti.jpg';
import frios from '../src/assets/frios.jpg';
import padaria from '../src/assets/padaria.jpg';


function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img className="Logo" src={logo} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Supermercados</Nav.Link>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Busca"
                    className="CampoBusca me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Pesquisar</Button>
                </Form>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <body className="App">
        <Carousel className="Carousel" interval={2000}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 ImageCarousel"
              src={first}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 ImageCarousel"
              src={second}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 ImageCarousel"
              src={third}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <CardGroup className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title>Hortifruti</Card.Title>
              <Card.Img variant="top" src={hortifruti} className="ImageSize" />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Frios</Card.Title>
              <Card.Img variant="top" src={frios} className="ImageSize" />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Padaria</Card.Title>
              <Card.Img variant="top" src={padaria} className="ImageSize" />
            </Card.Body>
          </Card>
        </CardGroup>
      </body>
    </div>
  );
}

export default App;
