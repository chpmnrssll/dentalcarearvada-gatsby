import React from 'react'
import PropTypes from 'prop-types'
import { ReviewTemplate } from '../../templates/review'

const ReviewPreview = ({ entry, widgetFor }) => (
  <ReviewTemplate
    author={entry.getIn(['data', 'author'])}
    date={entry.getIn(['data', 'date'])}
    icon={entry.getIn(['data', 'icon'])}
    location={entry.getIn(['data', 'location'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ReviewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReviewPreview
