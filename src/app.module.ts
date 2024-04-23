import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PostgresModule } from 'nest-postgres';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PostgresModule.forRoot({
      connectionString: process.env.POSTGRES_CONNECT,
    }, 'MainBd')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }