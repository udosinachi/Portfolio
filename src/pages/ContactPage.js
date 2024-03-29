import React from 'react'
import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap'

const ContactPage = () => {
  return (
    <div className="py-3">
      <Row className="home-header">
        <Col className="text-center m-auto">
          <Container>
            <>
              <p className="p">NEED A WEBSITE?</p>
              <h2 className="name">
                <strong>CONTACT ME</strong>
              </h2>
            </>
          </Container>
        </Col>
      </Row>

      <Container>
        <h2 className="name text-center m-auto py-5">CONTACT FORM</h2>
        <>
          <Row>
            <Col md={9} className="m-auto">
              <Form
                name="contact-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                action="/"
              >
                <input type="hidden" name="form-name" value="contact-form" />
                <div hidden>
                  <input name="bot-field" />
                </div>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Enter Your Name"
                    name="name"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Enter Your Email"
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Subject"
                    name="subject"
                  />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows={7}
                    size="lg"
                    placeholder="Your Message"
                    name="message"
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
    </div>
  )
}

export default ContactPage
