import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

const pageTitle = 'Appointments'

const AppointmentsPage = ({data}) => (<Layout>
  {/* Overwrite default title with pageTitle */}
  <Helmet>
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle}/>
    <meta itemprop="name" content={pageTitle}/>
    <meta property="og:title" content={pageTitle}/>
  </Helmet>
  <h3 className="is-size-3">Hours</h3>
  <table style={{
      marginTop: '1rem'
    }}>
    <tbody>
      <tr>
        <td>Monday:</td>
        <td>&nbsp;&nbsp;7:30 AM - 2:30 PM</td>
      </tr>
      <tr>
        <td>Tuesday:</td>
        <td>&nbsp;&nbsp;8:00 AM - 5:00 PM</td>
      </tr>
      <tr>
        <td>Wednesday:</td>
        <td>&nbsp;&nbsp;8:00 AM - 5:00 PM</td>
      </tr>
      <tr>
        <td>Thursday:</td>
        <td>&nbsp;&nbsp;8:00 AM - 4:30 PM</td>
      </tr>
      <tr>
        <td>Lunch:</td>
        <td>12:00 PM - 1:00 PM <small><i>except Mondays</i></small></td>
      </tr>
    </tbody>
  </table>
</Layout>)

export default AppointmentsPage
