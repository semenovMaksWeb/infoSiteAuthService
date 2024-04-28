import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { SqlModule } from 'src/sql/sql.module';

@Module({
    imports: [
        SqlModule
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