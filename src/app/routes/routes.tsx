import { HomePage } from '@/pages/home';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import { CoursesPage } from '@/pages/courses';
import { CoursesDetailPage } from '@/pages/courses-detail';
import { ProfilePage } from '@/pages/profile';



export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,

		children: [
			{index: true, element: <HomePage />},
			{path: 'courses', element: <CoursesPage />},
			{path: 'courses/:slug', element: <CoursesDetailPage />},
			{path: 'profile', element: <ProfilePage />},
		]
	}
])
