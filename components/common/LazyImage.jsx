import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

function LazyImage({ src, alt, className }) {
  return (
    <LazyLoad once offset={500} height="100%">
      <img src={src} alt={alt} className={className} />
    </LazyLoad>
  )
}

LazyImage.defaultProps = {
  alt: '',
  className: '',
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

export default LazyImage
