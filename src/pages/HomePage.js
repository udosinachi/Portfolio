import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom'
import Portfolio from '../components/Portfolio'

const HomePage = () => {
  return (
    <>
      <Row className='home-header'>
        <Col className='text-center m-auto'>
          <Container>
            <Zoom top>
              <p className='p'>HELLO, MY NAME IS</p>
              <h1 className='name'>
                <strong>UDOSINACHI OFOEGBU</strong>
              </h1>
              <p className='p'>WEB DESIGNER AND DEVELOPER</p>
            </Zoom>
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
