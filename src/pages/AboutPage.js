import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className='py-3'>
      <div className='about-header'></div>
      <Row className='py-5'>
        <Col className='text-center m-auto'>
          <Container>
            <h1 className='py-2'>UDOSINACHI OFOEGBU</h1>
            <p style={{ margin: 'auto', fontSize: '18px' }}>
              I am a React front-end web developer and i have been coding for
              almost 2 years. I stay in Nigeria, Imo State to be precise and I
              am available to be hired for any remote job. I started code around
              2019 because I was always curious about the functionalities of
              website and how they are created or made. So my cousin who is a
              full stack developer put me through and recommended some videos
              for me.
              <br />
              <br />I started with the basics of HTML and CSS first and with the
              help of YouTube and freecodecamp. After that, I began Vanilla
              Javascript and after a while i started using React which is a
              Javascript framework and ever since then I have been learing many
              other things like github, bootstrap, styled components, express,
              node and so on. I watch a course on MERN E-commerce which gave me
              an idea of how backend works but I havent practiced with it on my
              own yet. But whatever frontend project or job you need done, I am
              your guy
            </p>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default AboutPage
