import PropTypes from 'prop-types'
import StyledCard from './styles/Card'

function Card({ plan, type, height, mainColor, priceColor }) {
  return (
    <StyledCard height={height} mainColor={mainColor} priceColor={priceColor}>
      <div className="header">
        <div className="text-center content">
          <span className="name">{plan.name}</span>
          <span className="price">{plan[`${type}Price`]}</span>
        </div>
        <div className="arrow">
          <div className="arrow__arrow-down" />
        </div>
      </div>
      <div className="body">
        <span>Videos diarios</span>
        <span>Clases personalizadas</span>
      </div>
      <div className="text-center moreInfo">
        <span>MÁS INFORMACIÓN</span>
      </div>
    </StyledCard>
  )
}

Card.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string,
    monthPrice: PropTypes.string,
    yearPrice: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  priceColor: PropTypes.string.isRequired,
}

export default Card
