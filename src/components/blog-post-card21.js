import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card21.css'

const BlogPostCard21 = (props) => {
  return (
    <div className={`blog-post-card21-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt1}
        src={props.pastedImage_src1}
        className="blog-post-card21-pasted-image"
      />
      <div className="blog-post-card21-container">
        <div className="blog-post-card21-container1"></div>
        <h1 className="blog-post-card21-text">{props.title}</h1>
        <span className="blog-post-card21-text1">{props.description}</span>
        <div className="blog-post-card21-container2">
          <div className="blog-post-card21-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-card21-image"
            />
            <span className="blog-post-card21-text2">{props.author}</span>
          </div>
          <span className="blog-post-card21-text3">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard21.defaultProps = {
  rootClassName: '',
  title: 'Mental Wellness and Mindfulness Retreat: Nurture Your Inner Peace',
  pastedImage_alt1: 'pastedImage',
  description:
    'Join us for our "Mental Wellness and Mindfulness Retreat" on Sunday, November 12, 2023, from 8:30 AM to 2:30 PM at Harmony Fitness Center in downtown Singapore, as we prioritize mental health through a day of mindful exercise, stress-relief workshops, and mindfulness practices.',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ac02eeb9-5788-4d72-89f3-0ec9afa32b15/f6ee8dcc-3787-48ed-935b-d659db4313a4?org_if_sml=1480057',
  pastedImage_alt: 'pastedImage',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  author: 'Jane Doe',
  pastedImage_src1: '/external/pastedimage-nyeu-400h.png',
}

BlogPostCard21.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  description: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  author: PropTypes.string,
  pastedImage_src1: PropTypes.string,
}

export default BlogPostCard21
