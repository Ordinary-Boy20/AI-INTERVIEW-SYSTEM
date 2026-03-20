const AUTH_TOKEN_KEY = "auth_token"

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function setAuthToken(token) {
    if (!token) {
        localStorage.removeItem(AUTH_TOKEN_KEY)
        return
    }

    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function clearAuthToken() {
    localStorage.removeItem(AUTH_TOKEN_KEY)
}
