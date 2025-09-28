import api from "@/lib/axios";

export const hello = async () => {
    try {
        const response = await api.get("/hello");
        return response;
    } catch (error) {
        console.error("Error fetching statuses:", error);
        throw error.response.data.data || error;
    }
};
