import React from 'react'
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap'
import Portfolio from '../components/Portfolio'

const HomePage = () => {
  return (
    <>
      <Row className="home-header">
        <Col className="text-center m-auto">
          <Container>
            <>
              <p className="p">HELLO, MY NAME IS</p>
              <h2 className="name">
                <strong>UDOSINACHI OFOEGBU</strong>
              </h2>
              <p className="p">FRONT-END DEVELOPER</p>
            </>
          </Container>
        </Col>
      </Row>
      <br />
      <br />
      <Portfolio />

      <Container>
        <h2 className="name text-center m-auto py-5">CONTACT FORM</h2>
        <>
          <Row>
            <Col md={9} className="m-auto">
              <Form name="contact-form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact-form" />
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Enter Your Name"
                    name="Name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Enter Your Email"
                    name="Email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Subject"
                    name="Subject"
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={7}
                    size="lg"
                    placeholder="Your Message"
                    name="Message"
                  />
                </Form.Group>
                <Button
                  style={{ fontSize: '16px' }}
                  variant="dark"
                  type="submit"
                  size="lg"
                  block
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </>
      </Container>

      <Container>
        <Row className="py-5">
          <Col className="text-center m-auto">
            <h3>
              <Badge variant="secondary">
                Use the icons below to contact me
              </Badge>
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
