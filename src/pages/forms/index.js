import React from 'react'
import Layout from '../../components/Layout'

const FormsPage = ({data}) => (<Layout>
  <h3 className="is-size-3">Forms</h3>
  <section className="section">
    <b>Prior to your visit...</b>
    <p>Feel free to access forms below to save a few minutes prior to your appointment time. Thanks for your interest!</p>
  </section>
  <section className="section">
    <table style={{
        width: '100%'
      }}>
      <thead style={{
        borderBottom: '1px solid black'
      }}>
        <tr>
          <th>File</th>
          <th>Date</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{
              paddingBottom: '1rem'
            }}>
            <span>New Patient Forms</span>
            <div>
              <a href="/pdf/_NewPatientForms.pdf" rel="nofollow" target="_blank">View</a>
              &nbsp;|&nbsp;
              <a href="/pdf/_NewPatientForms.pdf" rel="nofollow" target="_blank">Download</a>
            </div>
          </td>
          <td><span>Jun 13, 2011</span></td>
          <td>348k</td>
        </tr>
        <tr>
          <td>
            <span>Children's Health Hisory Form</span>
            <div>
              <a href="/pdf/health_history_engspan.pdf" rel="nofollow" target="_blank">View</a>
              &nbsp;|&nbsp;
              <a href="/pdf/health_history_engspan.pdf" rel="nofollow" target="_blank">Download</a>
            </div>
          </td>
          <td><span>Dec 16, 2010</span></td>
          <td>113k</td>
        </tr>
      </tbody>
    </table>
  </section>
</Layout>)

export default FormsPage
