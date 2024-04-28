import { ErrorsModule } from './errors/errors.module';
import { SqlModule } from './sql/sql.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PostgresModule } from 'nest-postgres';
import { CONST_NAME } from './const/const';

@Module({
  imports: [
    ErrorsModule,
    SqlModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PostgresModule.forRoot({
      connectionString: process.env.POSTGRES_CONNECT,
    }, CONST_NAME.BD.CONNECTION_NAME)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }