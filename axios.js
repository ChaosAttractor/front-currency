import axios from "axios";

// todo src
export default axios.create({
    baseURL: import.meta.env.VITE_API_URL
})