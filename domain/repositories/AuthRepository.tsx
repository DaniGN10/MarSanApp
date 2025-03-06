import {UserInterface, UserLoginInterface} from "../entities/User";
import {ApiInvoiceResponse} from "../../data/sources/remote/models/ResponseApiInvoice";


export interface AuthRepository {
    register: (user: UserInterface) => Promise<ApiInvoiceResponse>;
    login: (user: UserLoginInterface) => Promise<ApiInvoiceResponse>;

}