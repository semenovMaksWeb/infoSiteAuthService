import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

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
    @IsNotEmpty({ message: "Укажите пароль пользователя" })
    password: string;
}