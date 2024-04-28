import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthErrors } from 'src/auth/interface/auth.interface';
import { CONST_NAME } from 'src/const/const';

@Injectable()
export class ErrorsService {
    public errorRegister(): AuthErrors {
        return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: [{ field: "email", text: [CONST_NAME.TEXT_ERROR.REGISTER.UNIQUE_EMAIL] }]
        }
    }
}