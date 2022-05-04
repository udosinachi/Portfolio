import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SocialMedia = () => {
  return (
    <div className="bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            <a
              href="https://github.com/udosinachi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="i fab fa-github my-3 p-3"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/udosinachi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="i fab fa-linkedin my-3 p-3"></i>
            </a>
            <a
              href="https://www.twitter.com/udosinachii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="i fab fa-twitter my-3 p-3"></i>
            </a>
            <a
              href="https://wa.me/+2348161993142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="i fab fa-whatsapp my-3 p-3"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/devudosinachi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="i fab fa-google my-3 p-3"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SocialMedia
