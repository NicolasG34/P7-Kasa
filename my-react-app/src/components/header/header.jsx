import { NavLink, Link } from "react-router";
import logo from "../../assets/kasa.png"
import "../header/header.scss"
import '../../style/global.scss'

function Header() {
	return (
		<header className="header">
			<Link to="/">
				<img src={logo} alt="Kasa Logo" className="header__logo" />
			</Link>
			<nav className="header__link">
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? 'nav-active' : 'nav-link'
					}
					to="/a-propos"
				>
					A Propos
				</NavLink>
			</nav>
		</header>
	)
}

export default Header