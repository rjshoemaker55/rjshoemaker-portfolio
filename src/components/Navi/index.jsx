import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Projects2 from '../../pages/Projects2';
import Contact from '../../pages/Contact';

import './style.css';

const Navi = () => {
  return (
    <>
      <div id='wrap'>
        <Router>
          <Navbar collapseOnSelect id='top-nav' expand='lg' variant='dark'>
            <Navbar.Brand as={Link} to='/'>
              RJ Shoemaker
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/projects'>
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects2' exact component={Projects2} />
        </Router>
        <div id='push' />
      </div>
      <div id='footer'>
        <Navbar id='bottom-nav'>
          <div className='justify-content-left'>RJ Shoemaker 2019 ©</div>
          <div className='ml-auto'>
            <a
              href='https://www.github.com/rjshoemaker55/rjs-portfolio'
              target='_blank'
              id='react-button'
              rel='noopener noreferrer'
            >
              Created with React
            </a>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navi;
