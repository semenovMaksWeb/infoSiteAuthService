import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

import { CONST_NAME } from "src/lib/const/const";

const AUTHOHIZATION = CONST_NAME.TEXT_ERROR.AUTHOHIZATION;

export class AuthAuthorizationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: AUTHOHIZATION.EMPTY_EMAIL })
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: AUTHOHIZATION.EMPTY_PASSWORD })
    password: string;
}