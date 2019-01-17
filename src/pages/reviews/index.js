import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import {v4} from 'uuid'
import Layout from '../../components/Layout'

import imgFemale from '../../img/cf.gif'
import imgMale from '../../img/cm.gif'

const pageTitle = 'Reviews'

export default class ReviewsPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: reviews} = data.allMarkdownRemark

    return (<Layout>
      {/* Overwrite default title with pageTitle */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle}/>
        <meta itemprop="name" content={pageTitle}/>
        <meta property="og:title" content={pageTitle}/>
      </Helmet>
      <h3 className="is-size-3">Patient Reviews</h3>
      <ul>
        {
          reviews.map(({node: review}) => (<li key={v4()} className="media" style={{
              margin: '.5rem',
              padding: '1rem .5rem'
            }}>
            <div className="image is-1x1 media-left" style={{
                paddingLeft: '2rem'
              }}>
              <img src={(review.frontmatter.icon === 'male') ? imgMale : imgFemale} alt="Avatar"/>
            </div>
            <div className="media-content">
              <div style={{
                  marginBottom: '1rem'
                }}>
                <Link to={review.fields.slug}>{review.frontmatter.title}</Link>
                <p>
                  {review.rawMarkdownBody}
                </p>
              </div>
              <cite>
                {review.frontmatter.author}
                - {review.frontmatter.location}
              </cite>
              <div className="is-size-7">
                Posted on {review.frontmatter.date}
              </div>
            </div>
          </li>))
        }
      </ul>
    </Layout>)
  }
}

ReviewsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({edges: PropTypes.array})
  })
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
          rawMarkdownBody
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
