import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthRegisterDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: "Укажите имя пользователя" })
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: "Укажите фамилию пользователя" })
    surname: string;

    @ApiProperty()
    @IsString()
    middlename: string;

    @ApiProperty()
    @IsString()
    @IsEmail({}, { message: "Не валидно указан email" })
    @IsNotEmpty({ message: "Укажите email пользователя" })
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(12, { message: "Пароль должен состоять из более 12 символов" })
    @IsNotEmpty({ message: "Укажите пароль пользователя" })
    password: string;
}