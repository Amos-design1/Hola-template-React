import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card2.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="blog-post-card2-pasted-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1"></div>
        <h1 className="blog-post-card2-text">{props.title}</h1>
        <span className="blog-post-card2-text1">{props.description}</span>
        <div className="blog-post-card2-container2">
          <div className="blog-post-card2-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-card2-image"
            />
            <span className="blog-post-card2-text2">{props.author}</span>
          </div>
          <span className="blog-post-card2-text3">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  rootClassName: '',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  pastedImage_alt: 'pastedImage',
  pastedImage_src: '/external/pastedimage-azmf-400h.png',
  title: 'Mindful Picnic Retreat: Nourish Your Mind and Body',
  image_alt: 'image',
  when: '3 days ago',
  profile_alt: 'profile',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  description:
    'Join us for the "Mindful Picnic Retreat" on Saturday, October 21, 2023, from 10:00 AM to 3:00 PM at Tranquil Meadow Park in Serenity Grove, Singapore, as we focus on improving mental wellness through relaxation, mindfulness, and a connection with nature.',
  author: 'Jane Doe',
  label: 'ENTERPRISE',
}

BlogPostCard2.propTypes = {
  rootClassName: PropTypes.string,
  profile_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  when: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
}

export default BlogPostCard2
