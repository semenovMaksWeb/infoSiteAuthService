import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-postgres";
import { Client } from "pg";

@Injectable()
export class SqlService {
    constructor(
        @InjectConnection('MainBd')
        private dbConnection: Client,
    ) { }
    public async sqlFuncitonRun(name: string, params: any) {
        const param = this.parsingParams(params);
        const SQL_STRING = `select * from ${name}(${param})`;
        return await this.dbConnection.query(SQL_STRING);
    }

    private parsingParams(params: any) {
        const param = [];
        for (const key in params) {
            const value = params[key];
            let paramString = `_${key} => '${value}'`
            if (typeof value == "string") {
                paramString += "::varchar";
            }
            if (typeof value == "number") {
                paramString += "::int";
            }
            if (typeof value == "boolean") {
                paramString += "::bool";
            }
            param.push(paramString);
        }
        return param.join(", ")
    }
}