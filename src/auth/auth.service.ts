import { Injectable } from '@nestjs/common';
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
    constructor(
        private authRepository: AuthRepository,
    ) { }
    public async register(authRegisterDto: AuthRegisterDto) {
       return await this.authRepository.resister(authRegisterDto);
    }
}