import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { SqlModule } from 'src/sql/sql.module';
import { ErrorsModule } from 'src/errors/errors.module';

@Module({
    imports: [
        SqlModule,
        ErrorsModule,
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        AuthRepository,
    ],
})

export class AuthModule { }