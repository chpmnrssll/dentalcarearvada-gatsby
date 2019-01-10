import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import {v4} from 'uuid'

import Layout from '../../components/Layout'

import imgFemale from '../../img/cf.gif'
// import imgMale from '../img/cm.gif'

export default class ReviewsPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: reviews } = data.allMarkdownRemark

    return (<Layout>
      <h4>Patient Reviews</h4>

      <ul>
        <li>
          <span className="percentage">99.3%</span> of patients would refer friends and family to us.
        </li>
        {reviews.map(review => (
        <li key={v4()} className="media">
          <div className="message-body">
            <div className="image is-1x1 media-left">
              <img src={imgFemale} alt="cf"/>
            </div>
            <div className="media-content">
              <div>
                <Link to="/reviews/lovethisdentist">{review.title}</Link>
                {review.html}
              </div>
              <div>{review.author}</div>
              <br/>
              <div className="is-size-7">Posted {review.date}</div>
            </div>
            <br />
            <cite>{review.author} - {review.location}</cite>
          </div>
        </li>
        ))}
      </ul>
    </Layout>)
  }
}

ReviewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const reviewsQuery = graphql `
  query ReviewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "review" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            author
            date(formatString: "MMMM DD, YYYY")
            icon
            location
            title
          }
        }
      }
    }
  }
`
