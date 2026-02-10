
import { ROUTES } from '@/shared'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
	return (
		<div>
			<h1>MainPage</h1>
			<nav>
			<NavLink to={ROUTES.home}>Главная</NavLink>
			<NavLink to={ROUTES.courses.index}>Курсы</NavLink>
			<NavLink to={ROUTES.profile}>Профиль</NavLink>
				
			</nav>
		</div>
	)
}
