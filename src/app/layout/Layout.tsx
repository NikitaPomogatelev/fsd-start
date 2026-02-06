import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<div>
			<header>Шапка</header>
			<main><Outlet /></main>
			<footer>Подвал</footer>
		</div>
	)
}

export default Layout
