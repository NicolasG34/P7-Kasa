import { Link } from 'react-router'
import '../../style/global.scss'
import './error.scss'

function Error({
	title = 'Erreur',
	subtitle = 'Oops, une erreur est survenue.',
}) {
	return (
		<section className="error">
			<h1 className="error-title">{title}</h1>
			<h2 className="error-subtitle">
				{subtitle}
			</h2>
			<Link className="error-link" to="/">
				Retourner sur la page d'accueil
			</Link>
		</section>
	)
}

export default Error