import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

import imgFemale from '../img/cf.gif'
import imgMale from '../img/cm.gif'

export const ReviewTemplate = ({
  helmet,
  author,
  date,
  fields,
  icon,
  location,
  title,
  content,
  contentComponent
}) => {
  const ReviewContent = contentComponent || Content

  return (
    <section className="section media">
      {helmet || ''}
      <div className="image is-1x1 media-left" style={{
        paddingLeft: '2rem'
      }}>
        <img src={(icon === 'male') ? imgMale : imgFemale} alt="cf"/>
      </div>
      <div className="media-content">
        <div style={{
          marginBottom: '1rem'
        }}>
          <Link to={fields.slug}>{title}</Link>
          <ReviewContent content={content} />
        </div>
        <cite>
          {author} - {location}
        </cite>
        <div className="is-size-7">
          Posted on {date}
        </div>
      </div>
    </section>
  )
}

ReviewTemplate.propTypes = {
  helmet: PropTypes.object,
  author: PropTypes.string,
  date: PropTypes.string,
  icon: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const Review = ({ data }) => {
  const { markdownRemark: review } = data

  return (
    <Layout>
      <ReviewTemplate
        helmet={
          <Helmet titleTemplate="%s | Review">
            <title>{`${review.frontmatter.title}`}</title>
            <meta name="description" content={`${review.html}`} />
          </Helmet>
        }
        author={review.frontmatter.author}
        date={review.frontmatter.date}
        fields={review.fields}
        icon={review.frontmatter.icon}
        location={review.frontmatter.location}
        title={review.frontmatter.title}
        content={review.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

Review.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Review

export const reviewQuery = graphql`
  query ReviewByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        icon
        location
        title
      }
    }
  }
`
