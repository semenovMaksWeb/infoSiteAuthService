import { HttpStatus, Injectable } from '@nestjs/common';

import { CONST_NAME } from 'src/lib/const/const';
import { errorsResponse } from 'src/lib/interface/status.interface';

@Injectable()
export class ErrorsService {
    public errorregistration(): errorsResponse {
        return {
            statusCode: HttpStatus.BAD_REQUEST,
            message: [{ field: "email", text: [CONST_NAME.TEXT_ERROR.registration.UNIQUE_EMAIL] }]
        }
    }
}