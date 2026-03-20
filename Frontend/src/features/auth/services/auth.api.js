 
import axios from "axios"
import { clearAuthToken, getAuthToken, setAuthToken } from "./token"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

api.interceptors.request.use((config) => {
    const token = getAuthToken()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        setAuthToken(response.data.token)
        return response.data

    } catch (err) {
        console.log(err)
        throw err
    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        setAuthToken(response.data.token)
        return response.data

    } catch (err) {
        console.log(err)
        throw err
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        clearAuthToken()
        return response.data

    } catch (err) {
        clearAuthToken()
        throw err
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
        if (err?.response?.status === 401) {
            clearAuthToken()
        }
        throw err
    }

}
