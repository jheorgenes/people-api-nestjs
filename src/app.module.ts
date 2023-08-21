import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresConfigService } from './config/postgres.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [
    PeopleModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
})
export class AppModule {}
