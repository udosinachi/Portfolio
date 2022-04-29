import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import PortfolioData from '../PortfolioData'

const Portfolio = (props) => {
  return (
    <>
      <Container>
        <>
          <h1 className="text-center py-3">My Porfolio</h1>
          <Row>
            {PortfolioData.map((port) => (
              <Col sm={12} md={6} lg={6} xl={4} key={port._id}>
                <Card className="my-3 p-3 rounded">
                  <a href={port.link} target="_blank" rel="noopener noreferrer">
                    <Card.Img src={port.image} variant="top" />
                  </a>

                  <Card.Body>
                    <a
                      href={port.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Title>{port.name}</Card.Title>
                    </a>
                  </Card.Body>
                  <Card.Text>{port.description}</Card.Text>
                  <Card.Text>
                    <a
                      href={port.gitRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>
                        <i className="fab fa-git-alt px-1"></i>Github Repository
                      </span>
                    </a>
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      </Container>
      <br />
      <br />
    </>
  )
}

export default Portfolio
