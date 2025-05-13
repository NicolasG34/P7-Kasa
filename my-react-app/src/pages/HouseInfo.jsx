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
        return <Navigate to="/404" />
    }

    return (
        <div>
            <Header />
            <section className="HouseInfoPage">
                <Carrousel slides={rental.pictures} />
                <div className="HouseInfoPageRent">
                    <div className="HouseInfoPageRent__info">
                        <h1 className="HouseInfoPageRent__info--title">{rental.title}</h1>
                        <p className="HouseInfoPageRent__info--location">{rental.location}</p>
                        <div className="HouseInfoPageRent__info--tags">
                            <Tags tag={rental.tags} />
                        </div>
                    </div>
                    <div className="HouseInfoPageRent__renter">
                        <div className="HouseInfoPageRent__renter--identity">
                            <p className="HouseInfoPageRent__renter--identity--name">{rental.host.name}</p>
                            <img
                                className="HouseInfoPageRent__renter--identity--pic"
                                src={rental.host.picture}
                                alt=""
                            />
                        </div>
                        <Rating rating={rental.rating} />
                    </div>
                </div>
                <div className="HouseInfoPageRent__collapse">
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
            <Footer />
        </div>
    )
}

export default HouseInfo