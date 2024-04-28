import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";
import { CONST_NAME } from "./const/const";

export function exceptionFactory(validationErrors: ValidationError[] = []) {
    return new BadRequestException(
        validationErrors.map((error) => {
            return {
                field: error.property,
                text: Object.values(error.constraints),
            }
        }), { description: CONST_NAME.TEXT_ERROR[400] }
    )
}