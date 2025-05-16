import Error from "../components/error/error"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

function ErrorPage() {


	return (
		<div>
			<Header />
			<Error
				title="404"
				subtitle="Oups! La page que vous demandez n'existe pas."
			/>
			<Footer />
		</div>
	)
}

export default ErrorPage
