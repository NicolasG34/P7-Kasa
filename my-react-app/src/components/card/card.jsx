import "./card.scss"
import { Link } from 'react-router'

function Card( {rent }) {
    return (
        <Link to={`/logement/${rent.id}`} >
        <div className="card">
        <img className="card__img" src={rent.cover} alt="" />
        <h2 className="card__title"> {rent.title} </h2>
      </div>
      </Link>
    )
  }
  
export default Card