import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header style={{ position: 'fixed', width: '100%', zIndex: '1' }}>
      <Navbar className='bg-light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <h2 style={{ fontSize: '24px' }}>UDOSINACHI</h2>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>
                  <p style={{ fontSize: '16px' }}>Home</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>
                  <p style={{ fontSize: '16px' }}>About</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <p style={{ fontSize: '16px' }}>Contact</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/resume'>
                <Nav.Link>
                  <p style={{ fontSize: '16px' }}>Resume</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
