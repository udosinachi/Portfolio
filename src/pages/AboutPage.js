import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className='py-3'>
      <div className='home-header'></div>
      <Row className='py-5'>
        <Col className='text-center m-auto'>
          <Container>
            <h1>UDOSINACHI OFOEGBU</h1>
            <p style={{ width: '75%', margin: 'auto' }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.
            </p>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default AboutPage
