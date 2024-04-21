import { Injectable } from '@nestjs/common';
import { AuthRegisterDto } from './dto/auth.register.dto';

@Injectable()
export class AuthService {
    public register(authRegisterDto: AuthRegisterDto) {
        return 1;
    }
}