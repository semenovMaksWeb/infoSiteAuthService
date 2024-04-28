import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-postgres";
import { Client } from 'pg';
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { SqlService } from "src/sql/sql.service";

@Injectable()
export class AuthRepository {
    constructor(
        private sqlService: SqlService,
    ) { }

    public async resister(authRegisterDto: AuthRegisterDto) {
        const result = await this.sqlService.sqlFuncitonRun("auth.register", authRegisterDto);
        return result.rows;
    }
}