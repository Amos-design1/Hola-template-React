import React from 'react'

import PropTypes from 'prop-types'

import './feature-card2.css'

const FeatureCard2 = (props) => {
  return (
    <div className="feature-card2-feature-card">
      <h2 className="feature-card2-text">{props.title}</h2>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card2-image"
      />
    </div>
  )
}

FeatureCard2.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  title: 'Online Session',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
}

FeatureCard2.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard2
