import axios from "axios";

const ApiInvoice = axios.create({
    baseURL: "http://192.168.73.229:8080/api",
    headers: {
        "Content-Type": "application/json",
    }
})

export { ApiInvoice };
