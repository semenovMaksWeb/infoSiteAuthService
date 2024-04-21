import { Controller, Post } from '@nestjs/common';

@Controller({ path: "auth" })
export class AuthController {
    @Post("register")
    register(): number {
        return 1
    }
}