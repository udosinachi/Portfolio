import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import PortfolioData from '../PortfolioData'

const Portfolio = () => {
  return (
    <>
      <Container>
        <h1 className='text-center py-3'>My Porfolio</h1>
        <Row>
          {PortfolioData.map((port) => (
            <Col sm={12} md={6} lg={6} xl={4}>
              <Card className='my-3 p-3 rounded'>
                <a href='#'>
                  <Card.Img src={port.image} variant='top' />
                </a>

                <Card.Body>
                  <a href='#'>
                    <Card.Title>UdoStore</Card.Title>
                  </a>
                </Card.Body>
                <Card.Text>
                  {/*<i class='fab fa-git-alt'></i>*/}Created with react, react
                  bootstrap and so on
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <br />
      <br />
    </>
  )
}

export default Portfolio
