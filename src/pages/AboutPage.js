import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className="about-header">
      <Row className="home-header">
        <Col className="text-center m-auto">
          <Container>
            <>
              <p className="p">WHO IS UDOSINACHI?</p>
              <h2 className="name">
                <strong>ABOUT ME</strong>
              </h2>
            </>
          </Container>
        </Col>
      </Row>
      <div className="py-3">
        <Row className="py-5">
          <Col className="text-center m-auto">
            <Container>
              <>
                <h2 className="py-2" style={{ color: '#93c54b' }}>
                  UDOSINACHI OFOEGBU
                </h2>
                <p style={{ margin: 'auto', fontSize: '17px' }}>
                  I am a React front-end web developer and i have been coding
                  since 2019. I stay in Nigeria and I am available to be hired
                  for any remote job. I started code around 2019 because I was
                  always curious about the functionalities of website and how
                  they are created or made.
                </p>
              </>
            </Container>
          </Col>
        </Row>
        <Row className="py-2">
          <Col className="text-center m-auto">
            <Container>
              <>
                <h2 className="py-2" style={{ color: '#93c54b' }}>
                  TECHNOLOGIES
                </h2>
                <p style={{ margin: 'auto', fontSize: '17px' }}>
                  I've worked with a range of technologies in the web
                  development world. My technical skills includes HTML, CSS,
                  SASS, Javascript [ES6+], ReactJS, Styled Components,
                  Bootstrap, Typescript, NodeJS, Redux, Mongodb, Express... and
                  some other dot js libraries.
                </p>
              </>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutPage
