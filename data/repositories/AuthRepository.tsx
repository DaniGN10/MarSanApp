import {AuthRepository} from "../../domain/repositories/AuthRepository";
import {UserInterface, UserLoginInterface} from "../../domain/entities/User";
import {ApiInvoiceResponse} from "../sources/remote/models/ResponseApiInvoice";
import {ApiInvoice} from "../sources/remote/api/ApiInvoice";
import {AxiosError} from "axios";


export class AuthRepositoryImpl implements AuthRepository {

    async register(user: UserInterface): Promise<ApiInvoiceResponse> {
        try {
            const response = await ApiInvoice.post("/users/create", user)
            return Promise.resolve(response.data)
        }
        catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiInvoiceResponse)
        }
    }


    async login(user: UserLoginInterface): Promise<ApiInvoiceResponse> {
        try {
            const response = await ApiInvoice.post("/users/login", user)
            return Promise.resolve(response.data)
        }
        catch (error) {
            let e = (error as AxiosError)
            console.log("Error: " + JSON.stringify(e.response?.data))
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiInvoiceResponse)
        }
    }


}
