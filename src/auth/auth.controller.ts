import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth.register.dto';

@Controller({ path: "auth" })
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post("register")
    register(@Body() authRegisterDto: AuthRegisterDto) {
        return this.authService.register(authRegisterDto)
    }
}