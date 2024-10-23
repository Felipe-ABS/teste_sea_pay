import { ILoginError } from "../interfaces/i-login-error";
import { ILoginSuccess } from "../interfaces/i-login-success";

export type LoginResponse = ILoginSuccess | ILoginError;
