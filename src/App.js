import './App.css';
import {Container,Row,Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card,CardImg, CardBody, CardTitle, CardText, Form, FormGroup, FormLabel, FormControl, FormText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
            <FormGroup controlId='formEmail'>
            <FormLabel>
              Email Address
            </FormLabel>
            <FormControl type='email' placeholder='Example@email.com' />
            <FormText className='text-muted'>We'll never share your email address to anyone.</FormText> </FormGroup></Col>
            <Col md>
            <FormGroup controlId='formPassword'>
            <FormLabel>
              Password
            </FormLabel>
            <FormControl type='password' placeholder='Password' />
          </FormGroup></Col>
          </Row>
          <Button variant='secondary' type='submit'>Login</Button>
        </Form>
  <Card className='mb-3'>
  <CardImg src='https://freedesignfile.com/upload/2019/04/Male-and-female-college-students-reading-books-in-the-library-Stock-Photo.jpg' />
          <CardBody>
          <CardTitle>
            Card Example
          </CardTitle>
          <CardText>
            This is an example of react bootstrap cards
          </CardText>
          <Button variant='primary'>Read More</Button>
          </CardBody>         
  </Card>
        <Breadcrumb>
          <BreadcrumbItem>Test1</BreadcrumbItem>
          <BreadcrumbItem>Test2</BreadcrumbItem>
          <BreadcrumbItem active>Test3</BreadcrumbItem>
        </Breadcrumb>
        <Alert variant='primary'>This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
    
  );
}

export default App;
