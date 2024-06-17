import { Injectable } from "@nestjs/common";

import { SqlService } from "src/sql/sql.service";
import { AuthRepositoryAuthorizatioReturn, AuthRepositoryRegistrationReturn } from "./interface/auth.interface";
import { AuthAuthorizationDto } from "./dto/auth.authorization.dto";
import { AuthregistrationDto } from "./dto/auth.registration.dto";

@Injectable()
export class AuthRepository {
    constructor(
        private sqlService: SqlService,
    ) { }

    public async registration(
        authregistrationDto: AuthregistrationDto
    ): Promise<AuthRepositoryRegistrationReturn> {
        const result = await this.sqlService.sqlFuncitonRun("auth.registration", authregistrationDto);
        return result.rows[0];
    }

    public async authorization(
        authAuthorizationDto: AuthAuthorizationDto
    ): Promise<AuthRepositoryAuthorizatioReturn> {
        const result = await this.sqlService.sqlFuncitonRun("auth.user_check_authorization", authAuthorizationDto);
        return result.rows[0];
    }
}