import api from "@/lib/axios";

export const login = (email, password) =>
    api.post("/login", { email, password });

export const register = (name, email, password, password_confirmation) =>
    api.post("/register", { name, email, password, password_confirmation });

export const getUser = () =>
    api.get("/user"); // if Laravel Sanctum or JWT is set up
