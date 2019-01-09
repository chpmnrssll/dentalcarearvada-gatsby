import React from 'react'
import Layout from '../../components/Layout'

const AppointmentsPage = ({data}) => (<Layout>
  <section className="section">
    <table>
      <thead>
        <tr>
          <th>
            <b>Hours:</b>
          </th>
        </tr>
      </thead>
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
          <td>12:00 PM - 1:00 PM&nbsp;&nbsp;except Mondays</td>
        </tr>
      </tbody>
    </table>
  </section>
</Layout>)

export default AppointmentsPage
