import React from 'react'
import Slide from 'react-reveal/Slide'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className="about-header">
      <div className="py-3">
        <div className="the-img">
          <img src="images/pic.jpg" alt="me" />
        </div>
        <Row className="py-5">
          <Col className="text-center m-auto">
            <Container>
              <Slide bottom>
                <h1 className="py-2" style={{ color: '#93c54b' }}>
                  UDOSINACHI OFOEGBU
                </h1>
                <p style={{ margin: 'auto', fontSize: '18px' }}>
                  I am a React front-end web developer and i have been coding
                  since 2019. I stay in Nigeria and I am available to be hired
                  for any remote job. I started code around 2019 because I was
                  always curious about the functionalities of website and how
                  they are created or made.
                </p>
              </Slide>
            </Container>
          </Col>
        </Row>
        <Row className="py-2">
          <Col className="text-center m-auto">
            <Container>
              <Slide bottom>
                <h1 className="py-2" style={{ color: '#93c54b' }}>
                  TECHNOLOGIES
                </h1>
                <p style={{ margin: 'auto', fontSize: '18px' }}>
                  I've worked with a range of technologies in the web
                  development world. My technical skills includes HTML, CSS,
                  SASS, Javascript [ES6+], ReactJS, Styled Components,
                  Bootstrap, Typescript, NodeJS, Redux, Mongodb, Express... and
                  some other dot js libraries.
                </p>
              </Slide>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutPage
