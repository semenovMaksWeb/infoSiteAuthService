import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CONST_NAME } from "src/lib/const/const";

const REGISTER = CONST_NAME.TEXT_ERROR.REGISTER;
export class AuthRegisterDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: REGISTER.EMPTY_NAME })
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: REGISTER.EMPTY_SURNAME })
    surname: string;

    @ApiProperty()
    @IsString()
    middlename: string;

    @ApiProperty()
    @IsString()
    @IsEmail({}, { message: REGISTER.IS_EMAIL })
    @IsNotEmpty({ message: REGISTER.EMPTY_EMAIL })
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(
        CONST_NAME.VALIDATE.MIN_LENGTH_PASSWORD,
        { message: REGISTER.MIN_LENGTH_PASSWORD }
    )
    @IsNotEmpty({ message: REGISTER.EMPTY_PASSWORD })
    password: string;
}