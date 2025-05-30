import Header from "../components/header/header"
import Banner from "../components/banner/banner"
import BannerImage from '../assets/banner.jpg'
import Footer from '../components/footer/footer'
import Card from '../components/card/card'
import { Link } from 'react-router'
import AppartmentData from '../assets/logements.json'
import './home.scss'
import "../style/global.scss"

function HomePage() {

  return (
    <div>
      <Header />
      <Banner
        picture={BannerImage}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />
      <section className="appartmentRent">
        <div className="appartmentRent__card">
          {AppartmentData.map((appartmentCard) => (
              <Card rent={appartmentCard} key={appartmentCard.id}/>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage

  