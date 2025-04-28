import Header from "../components/header/header"
import Banner from "../components/banner/banner"
import BannerImage from '../assets/banner.jpg'
import Footer from '../components/footer/footer'

function HomePage() {

  return (
    <div>
      <Header></Header>
      <Banner
        picture={BannerImage}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />
      <Footer></Footer>
    </div>
  )
}

export default HomePage

  