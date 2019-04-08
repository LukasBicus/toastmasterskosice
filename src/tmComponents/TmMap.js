import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import { getWindowWidth } from '../theme'
import Map from '../components/Map'
import { Text } from '../components/Typography'

const BASE_SIZE = 400

const TmMap = ({ isMobileView, title, src, description }) => {
  const width = isMobileView ? getWindowWidth() - 24 : BASE_SIZE
  return (
    <div>
      <Text.S mb={12}>
        {description}
      </Text.S>
      <Map
        title={title}
        width={width}
        height={Math.min(BASE_SIZE, width)}
        id={slugify(title, '-')}
        src={src}
      />
    </div>
  )
}

TmMap.propTypes = {
  isMobileView: PropTypes.bool,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default TmMap
