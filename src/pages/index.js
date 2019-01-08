import React from 'react'
// import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Layout from '../components/Layout'

import imgSmileMore from '../img/smile_more.jpg'
import imgCF from '../img/cf.gif'
import imgCM from '../img/cm.gif'
import imgE4DConsole from '../img/_E4D_Console.jpg'
import imgE4DMill from '../img/_E4D_mill.jpg'
import imgBannerv5 from '../img/banner-v5.jpg'

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (<Layout>
      <section>
        {/* <h3>Dr. Gregory Waters, DDS</h3> */}
        <Link to="https://patient.sesamecommunications.com/gwaters/index.html">
          Patient Login
        </Link>
        <br/>
        <div className="image is-fluid">
          <Link to="https://patient.sesamecommunications.com/gwaters/index.html">
            <img src={imgSmileMore} alt="Smile More"/>
          </Link>
        </div>
      </section>

      <section className="columns">
        <div className="column is-half">
          <h4 className="column-header">Three times voted "Denver's Top Dentists" in 5280 Magazine!</h4>
          <br/>
          <p>
            Welcome new and existing patients of Dr. Greg Waters, DDS to our online resource for you. Visiting our practice a uniquely warm and welcoming experience. You'll find we listen to your treatment goals and make your visits comfortable. Offering the very best quality care in an environment that values each patient is our goal. We'll help you achieve a beautiful and healthy smile. You can access our website to request an appointment, and find answers to your dental questions including procedure animations and informational resources. Information about our office, including directions, forms you can fill out prior to your visit, insurance carrier and forms of payment accepted are available online. Please don't hesitate to contact us by phone as well and enjoy your online visit.
          </p>
        </div>

        <div className="column reviews">
          <h4>Patient Reviews</h4>
          <ul>
            <li><span className="percentage">99.3%</span> of patients would refer friends and family to us.</li>
            <li>
              <img src={imgCF} alt="cf"/>
              <Link to="/reviews/lovethisdentist">Love this Dentist!</Link>
              The office staff are so nice and friendly and Dr. Waters is kind and gentle!
              <br/>
              Posted Jun 24, 2011, 11:45 AM by admin
            </li>
            <li>
              <img src={imgCM} alt="cm"/>
              <Link to="/reviews/asuperbdentist">A Superb Dentist</Link>
              Tom M. -Golden A very warm atmosphere, where you are treated as a friend. They are highly professional and caring as well. I highly recommend Dr. Waters and his staff
              <br/>
              Posted Jun 24, 2011, 11:37 AM by admin
            </li>
          </ul>
          <div>
            Showing posts <strong>1 - 2</strong> of <strong>5</strong>. <Link to="/reviews">View more »</Link>
          </div>
        </div>
      </section>

      <h4 className="column-header">Clinically Proven State-of-the-Art Dental Technology</h4>

      <section className="columns">
        <div className="column is-2 image is-fluid">
          <img src={imgE4DConsole} alt="~E4D Console"/>
        </div>
        <p className="column is-fluid">
          Dr. Waters uses modern, clinically proven methods to offer his patients the best quality care available. His practice is equipped with state of the art E4D technology, which can mill a custom crown on-site. Often with a single visit, Dr. Waters can offer procedures which previously required weeks. Same Day Crown: You may prefer the convenience and health benefits of eliminating multiple trips when a crowning procedure is necessary.
        </p>
        <div className="column is-4 image is-fluid">
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

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
