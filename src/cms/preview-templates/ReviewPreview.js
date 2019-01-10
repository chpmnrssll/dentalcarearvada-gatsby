import React from 'react'
import PropTypes from 'prop-types'
import { ReviewTemplate } from '../../templates/review'

const ReviewPreview = ({ entry, widgetFor }) => (
  <ReviewTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

ReviewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReviewPreview
