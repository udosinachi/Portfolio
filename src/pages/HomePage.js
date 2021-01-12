import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Portfolio from '../components/Portfolio'

const HomePage = () => {
  return (
    <>
      <Row className='home-header'>
        <Col className='text-center m-auto'>
          <Container>
            <p>HELLO, MY NAME IS</p>
            <h1>UDOSINACHI OFOEGBU</h1>
            <p>WEB DESIGNER AND DEVELOPER</p>
          </Container>
        </Col>
      </Row>
      <br />
      <br />
      <Portfolio />
    </>
  )
}

export default HomePage
