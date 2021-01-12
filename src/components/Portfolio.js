import React from 'react'
import { Container, Figure, Col, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <>
      <Container>
        <h1 className='text-center py-3'>My Porfolio</h1>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt='171x180'
                src='/images/h.jpg'
                variant='top'
              />
              <Figure.Caption>gdhd jsdkksd ksckks jsxjk</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Portfolio
