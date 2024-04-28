import { Injectable } from "@nestjs/common";
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { SqlService } from "src/sql/sql.service";
import { AuthRepositoryRegisterReturn } from "./interface/auth.interface";

@Injectable()
export class AuthRepository {
    constructor(
        private sqlService: SqlService,
    ) { }

    public async register(
        authRegisterDto: AuthRegisterDto
    ): Promise<AuthRepositoryRegisterReturn> {
        const result = await this.sqlService.sqlFuncitonRun("auth.register", authRegisterDto);
        return result.rows[0];
    }
}