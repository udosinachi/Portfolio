import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
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
              <p className="p">SOFTWARE DEVELOPER</p>
            </>
          </Container>
        </Col>
      </Row>
      <br />
      <br />
      <Portfolio />

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
