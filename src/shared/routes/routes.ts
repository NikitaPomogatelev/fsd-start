export const ROUTES = {
	home: '/',
	profile: '/profile',
	courses: {
		index: '/courses',
		detail: (alias: string) => `/courses/${alias}`,
	}
}
