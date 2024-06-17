import { Injectable } from '@nestjs/common';
import { ErrorsService } from 'src/errors/errors.service';
import { AuthRepository } from './auth.repository';
import { AuthAuthorizationDto } from './dto/auth.authorization.dto';
import { AuthregistrationDto } from './dto/auth.registration.dto';

@Injectable()
export class AuthService {
    constructor(
        private authRepository: AuthRepository,
        private errorsService: ErrorsService
    ) { }

    public async registration(authregistrationDto: AuthregistrationDto) {
        const resultregistration = await this.authRepository.registration(authregistrationDto);
        if (resultregistration.status_ == 0) {
            return this.errorsService.errorregistration();
        }
        return resultregistration;
    }

    public async authorization(authAuthorizationDto: AuthAuthorizationDto) {
        const resultregistration = await this.authRepository.authorization(authAuthorizationDto);
        return resultregistration;

    }
}