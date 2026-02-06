
import HomePage from '@/pages/home/ui/HomePage';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import CoursesPage from '@/pages/courses/ui/CoursesPage';
import CoursesDetailPage from '@/pages/courses-detail/ui/CoursesDetailPage';
import ProfilePage from '@/pages/profile/ui/ProfilePage';


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,

		children: [
			{index: true, element: <HomePage />},
			{path: '/courses', element: <CoursesPage />},
			{path: '/courses/:slug', element: <CoursesDetailPage />},
			{path: '/profile', element: <ProfilePage />},
		]
	}
])
