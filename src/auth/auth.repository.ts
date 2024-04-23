import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-postgres";
import { Client } from 'pg';
import { AuthRegisterDto } from "./dto/auth.register.dto";

@Injectable()
export class AuthRepository {

    constructor(
        @InjectConnection('MainBd')
        private dbConnection: Client,
    ) { }

    public async resister(authRegisterDto: AuthRegisterDto) {
        const sql = `SELECT * FROM auth.register(
            _name => $1, _surname => $2, _middlename => $3, _email => $4, _password => $5)`;
        const result = await this.dbConnection.query(
            sql,
            [
                authRegisterDto.name,
                authRegisterDto.surname,
                authRegisterDto.middlename,
                authRegisterDto.email,
                authRegisterDto.password
            ]
        );
        return result.rows;
    }
}