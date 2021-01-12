import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ background: '#222222', color: 'white' }}>
      <Container>
        <Row>
          <Col className='text-center py-4'>
            &copy; Copyrights Udosinachi 2020
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
