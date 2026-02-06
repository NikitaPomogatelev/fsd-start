import axios from 'axios';
import { CONFIG } from '../config';

export const http = axios.create({
	baseURL: CONFIG.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})
