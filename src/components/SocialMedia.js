import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SocialMedia = () => {
  return (
    <div className='bg-light'>
      <Container>
        <Row>
          <Col className='text-center'>
            <i className='fab fa-github my-3 p-3'></i>
            <i className='fab fa-linkedin my-3 p-3'></i>
            <i className='fab fa-twitter my-3 p-3'></i>
            <i className='fab fa-whatsapp my-3 p-3'></i>
            <i className='fab fa-whatsapp my-3 p-3'></i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SocialMedia
