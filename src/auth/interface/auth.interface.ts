import { HttpStatus } from "@nestjs/common";

export enum statusFunctionEnum {
    success = 1,
    error = 0
}

export type statusType = statusFunctionEnum.error | statusFunctionEnum.success;

export interface AuthRepositoryRegisterReturn {
    id_?: number;
    status_: statusType;
}

export enum statusCodeEnum {
    bad = 400
}

export interface AuthErrorsMessage {
    id: string;
    text: string[];
}

export interface AuthErrors {
    statusCode: HttpStatus;
    message: AuthErrorsMessage[]
}