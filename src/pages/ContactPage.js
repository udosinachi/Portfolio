import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'

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
