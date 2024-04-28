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

export interface AuthErrorsMessage {
    field: string;
    text: string[];
}

export interface AuthErrors {
    statusCode: HttpStatus;
    message: AuthErrorsMessage[]
}