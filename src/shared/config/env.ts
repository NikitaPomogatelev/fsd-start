export type EnvConfig = {
	VITE_API_URL: string;
}

export const CONFIG: EnvConfig = {
	VITE_API_URL: import.meta.env.VITE_API_URL
}
