import WhiteLogo from '../../assets/kasawhite.svg'
import './footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={WhiteLogo} alt="Kasa" />
      <p className="footer__disclaimer">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer