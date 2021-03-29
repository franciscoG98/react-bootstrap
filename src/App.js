import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Container fluid> */}
        <Container>

          <Navbar />
          <br />
          <br />
          <br />
          <Form class='mt-5'>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail' >
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control type='email' placeholder='Example@email.com' />
                  <Form.Text className='text-muted'>
                    We'll never share your personal information, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPassword' >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
              </Col>
            </Row>

            <Button variant='secondary' type='submit'>Log In</Button>


          </Form>

          <Card className='mb-3' style={{color: "#000"}}>
            <Card.Img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            />
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap cards
              </Card.Text>
              <Button variant="primary">read More</Button>

            </Card.Body>
          </Card>

          <Breadcrumb>
            <Breadcrumb.Item>test 1</Breadcrumb.Item>
            <Breadcrumb.Item>test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>test 3</Breadcrumb.Item>
          </Breadcrumb>

          <Alert variant='success'>This is another button</Alert>

          <Button>Test</Button>
        </Container>


      </header>
    </div>
  );
}

export default App;
