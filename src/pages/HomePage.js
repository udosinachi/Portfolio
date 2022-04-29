import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
    </>
  )
}

export default HomePage
