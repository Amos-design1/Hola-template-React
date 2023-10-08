import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about-us" className="navigation-links-navlink">
        About
      </Link>
      <Link to="/" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/game" className="navigation-links-navlink2">
        {props.text2}
      </Link>
      <Link to="/counselling" className="navigation-links-navlink3">
        {props.text3}
      </Link>
      <Link to="/community-posts" className="navigation-links-navlink4">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  text1: 'Home',
  text3: 'Counselling',
  rootClassName: '',
  text2: 'Game',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
