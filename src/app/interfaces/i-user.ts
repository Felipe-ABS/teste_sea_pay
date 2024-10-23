import { AccountType } from "../types/account-type";

export interface IUser {
    id: number,
    email: string,
    password: string,
    account_type: AccountType,
    name: string,
    registration: string,
}
