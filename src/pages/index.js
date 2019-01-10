import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'
import {v4} from 'uuid'

import imgSmileMore from '../img/smile_more.jpg'
import imgE4DConsole from '../img/_E4D_Console.jpg'
import imgE4DMill from '../img/_E4D_mill.jpg'
import imgBannerv5 from '../img/banner-v5.jpg'

import imgFemale from '../img/cf.gif'
import imgMale from '../img/cm.gif'

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: reviews} = data.allMarkdownRemark

    return (<Layout>
      <h3 className="is-size-3">Dr. Gregory Waters, DDS</h3>
      <section>
        <a href="https://patient.sesamecommunications.com/gwaters/index.html">
          Patient Portal Login
        </a>
        <div className="image is-fluid">
          <a href="https://patient.sesamecommunications.com/gwaters/index.html">
            <img src={imgSmileMore} alt="Smile More"/>
          </a>
        </div>
      </section>

      <section className="columns">
        <div className="column is-half">
          <h4 style={{
            backgroundColor: 'rgb(104,193,98)',
            color: 'white',
            paddingLeft: '.5rem'
          }}>
            Three times voted "Denver's Top Dentists" in 5280 Magazine!
          </h4>
          <br/>
          <p>
            Welcome new and existing patients of Dr. Greg Waters, DDS to our online resource for you. Visiting our practice a uniquely warm and welcoming experience. You'll find we listen to your treatment goals and make your visits comfortable. Offering the very best quality care in an environment that values each patient is our goal. We'll help you achieve a beautiful and healthy smile. You can access our website to request an appointment, and find answers to your dental questions including procedure animations and informational resources. Information about our office, including directions, forms you can fill out prior to your visit, insurance carrier and forms of payment accepted are available online. Please don't hesitate to contact us by phone as well and enjoy your online visit.
          </p>
        </div>

        <div className="column is-half" style={{
          border: '1px solid black',
          margin: '.75rem 0',
          padding: '0'
        }}>
          <h4 style={{
            backgroundColor: 'rgb(201, 211, 187)',
            borderBottom: '1px solid black',
            paddingLeft: '.5rem'
            }}>
            Patient Reviews
          </h4>
          <ul>
            <li className="media" style={{
              margin: '.5rem',
              padding: '.5rem'
            }}>
              <span style={{
                color: 'rgb(23,139,5)',
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '0'
              }}>
                99.3%
              </span>
              <span style={{
                padding: '.5rem'
              }}>
                of patients would refer friends and family to us.
              </span>
            </li>
            {
              /* Filter out all but the first 2 reviews */
              reviews.filter((review, index) => index < 2).map(({node: review}) => (
                <li key={v4()} className="media" style={{
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
                      {review.frontmatter.author} - {review.frontmatter.location}
                    </cite>
                    <div className="is-size-7">
                      Posted on {review.frontmatter.date}
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>

          <div className="is-size-7 has-text-right" style={{
            padding: '0 .5rem .5rem 0'
          }}>
            <Link className="is-size-7" to="/reviews">View more »</Link>
          </div>
        </div>
      </section>

      <h4 style={{
        backgroundColor: 'rgb(104,193,98)',
        color: 'white',
        paddingLeft: '.5rem'
      }}>
        Clinically Proven State-of-the-Art Dental Technology
      </h4>
      <section className="columns">
        <div className="column image is-2x3">
          <img src={imgE4DConsole} alt="~E4D Console"/>
        </div>
        <p className="column is-6">
          Dr. Waters uses modern, clinically proven methods to offer his patients the best quality care available. His practice is equipped with state of the art E4D technology, which can mill a custom crown on-site. Often with a single visit, Dr. Waters can offer procedures which previously required weeks. Same Day Crown: You may prefer the convenience and health benefits of eliminating multiple trips when a crowning procedure is necessary.
        </p>
        <div className="column image is-3x2">
          <img src={imgE4DMill} alt="~E4D mill"/>
        </div>
      </section>

      <h4>ClearCorrect is the simple, effective way to straighten teeth.</h4>
      <section className="image is-fluid">
        <img src={imgBannerv5} alt="banner-v5"/>
      </section>
    </Layout>)
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({edges: PropTypes.array})
  })
}

export const indexQuery = graphql `
  query IndexQuery {
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
