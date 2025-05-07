import { useParams } from 'react-router'
import { Navigate } from 'react-router'
import AppartmentData from '../assets/logements.json'
import Header from "../components/header/header"
import Footer from '../components/footer/footer'
import Carrousel from '../components/carrousel/carrousel'
import Tags from '../components/tags/tags'
import Rating from '../components/rating/rating'
import Collapse from '../components/collapse/collapse'
import './houseinfo.scss'
import "../style/global.scss"

function HouseInfo() {
  const { rentId } = useParams()
  const rental = AppartmentData.find((i) => i.id === rentId)

  if (!rental) {
    return <Navigate to="/adresse-introuvable" />
  }

  return (
    <div>
        <Header/>
    <section className="rental-page">
      <Carrousel slides={rental.pictures} />
      <div className="rental-info-container">
        <div className="rental-info">
          <h1 className="rental-info__title">{rental.title}</h1>
          <p className="rental-info__location">{rental.location}</p>
          <div className="rental-info__tags">
            <Tags tag={rental.tags} />
          </div>
        </div>
        <div className="renter-info">
          <div className="renter-info__identity">
            <p className="renter-info__identity__name">{rental.host.name}</p>
            <img
              className="renter-info__identity__pic"
              src={rental.host.picture}
              alt=""
            />
          </div>
          <Rating rating={rental.rating} />
        </div>
      </div>
      <div className="rental-collapse-container">
        <Collapse
          className="collapse collapse--small"
          title="Description"
          text={rental.description}
        />
        <Collapse
          className="collapse collapse--small"
          title="Équipements"
          text={rental.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
          state={true}
        />
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default HouseInfo