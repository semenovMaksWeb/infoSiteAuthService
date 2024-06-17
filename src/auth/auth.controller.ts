import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthAuthorizationDto } from './dto/auth.authorization.dto';
import { AuthregistrationDto } from './dto/auth.registration.dto';

@Controller({ path: "auth" })
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("registration")
    registration(@Body() authregistrationDto: AuthregistrationDto) {
        return this.authService.registration(authregistrationDto)
    }

    @Post("authorization")
    authorization(@Body() authAuthorizationDto: AuthAuthorizationDto) {
        return this.authService.authorization(authAuthorizationDto)
    }
}