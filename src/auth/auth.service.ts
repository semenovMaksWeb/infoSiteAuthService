import { Injectable } from '@nestjs/common';
import { AuthRegisterDto } from './dto/auth.register.dto';

@Injectable()
export class AuthService {
    public register(authRegisterDto: AuthRegisterDto) {
        this.checkPassword(authRegisterDto.password);
        return 1;
    }

    private checkPassword(password: string) {
        if (password.length < 12) {
            console.log("Пароль должен состоять из более 12 символов");
        }

        if (!/\d/.test(password)) {
            console.log("Пароль должен состоять из цифры");
        }

        if (!(/[AZ-АЯ]/.test(password))) {
            console.log("Пароль должен состоять из заглавных букв");
        }

        if (!/[^a-zA-Z0-9]$/.test(password)) {
            console.log("Пароль должен состоять из специальных символов");
        }
    }
}