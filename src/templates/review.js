import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ReviewTemplate = ({
  helmet,
  author,
  date,
  icon,
  location,
  title,
  content,
  contentComponent
}) => {
  const ReviewContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{author}</p>
            <p>{date}</p>
            <p>{icon}</p>
            <p>{location}</p>
            <ReviewContent content={content} />
          </div>
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
