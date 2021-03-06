import React from 'react'
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap'

const ContactPage = () => {
  return (
    <div className='py-3'>
      <Row className='home-header'>
        <Col className='text-center m-auto'>
          <Container>
            <Bounce Top>
              <p className='p'>NEED A WEBSITE?</p>
              <h2 className='name'>
                <strong>CONTACT ME</strong>
              </h2>
            </Bounce>
          </Container>
        </Col>
      </Row>

      <Container>
        <h2 className='name text-center m-auto py-5'>CONTACT FORM</h2>
        <Slide bottom>
          <Row>
            <Col md={9} className='m-auto'>
              <Form netlify>
                <Form.Group controlId='formBasicName'>
                  <Form.Control
                    type='text'
                    size='lg'
                    placeholder='Enter Your Name'
                  />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                  <Form.Control
                    type='email'
                    size='lg'
                    placeholder='Enter Your Email'
                  />
                </Form.Group>

                <Form.Group controlId='formBasicSubject'>
                  <Form.Control type='text' size='lg' placeholder='Subject' />
                </Form.Group>

                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Control
                    as='textarea'
                    rows={7}
                    size='lg'
                    placeholder='Your Message'
                  />
                </Form.Group>
                <Button
                  style={{ fontSize: '16px' }}
                  variant='dark'
                  type='submit'
                  size='lg'
                  block
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Slide>
      </Container>

      <Container>
        <Row className='py-5'>
          <Col className='text-center m-auto'>
            <h3>
              <Badge variant='secondary'>
                Use the icons below to contact me
              </Badge>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
