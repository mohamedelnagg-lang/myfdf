import axios from "axios";

// Create an Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Add Authorization header automatically if token exists
api.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Global response interceptor for errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status } = error.response;

            // Handle 401 Unauthorized globally
            if (status === 401) {
                console.warn("Unauthorized - redirecting to login...");
                if (typeof window !== "undefined") {
                    localStorage.removeItem("token");
                    window.location.href = "/login"; 
                }
            }

            // You can add more global error handling here
        }
        return Promise.reject(error);
    }
);

export default api;
