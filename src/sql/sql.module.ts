import { Module } from '@nestjs/common';
import { SqlService } from './sql.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        SqlService
    ],
    exports: [
        SqlService,
    ]
})
export class SqlModule { }
