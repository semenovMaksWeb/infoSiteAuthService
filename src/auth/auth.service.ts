import { Injectable } from '@nestjs/common';
import { ErrorsService } from 'src/errors/errors.service';
import { AuthRepository } from './auth.repository';
import { AuthRegisterDto } from './dto/auth.register.dto';

@Injectable()
export class AuthService {
    constructor(
        private authRepository: AuthRepository,
        private errorsService: ErrorsService
    ) { }

    public async register(authRegisterDto: AuthRegisterDto) {
        const resultRegister = await this.authRepository.register(authRegisterDto);
        if (resultRegister.status_ == 0) {
            return this.errorsService.errorRegister();
        }
        return resultRegister;
    }
}