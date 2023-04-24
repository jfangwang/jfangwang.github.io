import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.scss'
import { Col, Row } from 'react-bootstrap'

function Navbar(props) {
  return (
    <nav>
      <Row className="justify-content-xs-around justify-content-sm-center">
        <Col sm={2} md={2} xl={1} xxl={1}><li><a>Work</a></li></Col>
        <Col sm={2} md={2} xl={1} xxl={1}><li><a>Projects</a></li></Col>
        <Col sm={2} md={2} xl={1} xxl={1}><li><a>About</a></li></Col>
        <Col sm={2} md={2} xl={1} xxl={1}><li><a>Contact</a></li></Col>
      </Row>
    </nav>

  )
}

Navbar.propTypes = {}

export default Navbar
