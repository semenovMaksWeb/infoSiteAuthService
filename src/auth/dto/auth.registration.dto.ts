import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { CONST_NAME } from "src/lib/const/const";

const registration = CONST_NAME.TEXT_ERROR.registration;

export class AuthregistrationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: registration.EMPTY_NAME })
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: registration.EMPTY_SURNAME })
    surname: string;

    @ApiProperty()
    @IsString()
    middlename: string;

    @ApiProperty()
    @IsString()
    @IsEmail({}, { message: registration.IS_EMAIL })
    @IsNotEmpty({ message: registration.EMPTY_EMAIL })
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(
        CONST_NAME.VALIDATE.MIN_LENGTH_PASSWORD,
        { message: registration.MIN_LENGTH_PASSWORD }
    )
    @IsNotEmpty({ message: registration.EMPTY_PASSWORD })
    password: string;
}