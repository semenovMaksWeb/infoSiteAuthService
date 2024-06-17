import { HttpStatus } from "@nestjs/common";

export enum statusFunctionEnum {
    success = 1,
    error = 0
}

export type statusType = statusFunctionEnum.error | statusFunctionEnum.success;

export interface errorsMessageResponse {
    field: string;
    text: string[];
}

export interface errorsResponse {
    statusCode: HttpStatus;
    message: errorsMessageResponse[]
}