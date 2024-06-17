import { HttpStatus, Injectable } from '@nestjs/common';
import { CONST_NAME } from 'src/lib/const/const';
import { errorsResponse } from 'src/lib/interface/status.interface';

@Injectable()
export class ErrorsService {
    public errorRegister(): errorsResponse {
        return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: [{ field: "email", text: [CONST_NAME.TEXT_ERROR.REGISTER.UNIQUE_EMAIL] }]
        }
    }
}