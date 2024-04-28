import { ErrorsService } from './errors.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [
        ErrorsService,
    ],
    exports: [
        ErrorsService
    ]
})
export class ErrorsModule { }
