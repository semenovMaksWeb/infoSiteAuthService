import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthErrors } from 'src/auth/interface/auth.interface';

@Injectable()
export class ErrorsService {
    public errorRegister(): AuthErrors {
        return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: [{ field: "email", text: ["Текущая почта уже занята"] }]
        }
    }
}