import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export function exceptionFactory(validationErrors: ValidationError[] = []) {
    return new BadRequestException(
        validationErrors.map((error) => {
            return {
                field: error.property,
                text: Object.values(error.constraints),
            }
        })
    )
}