import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuditLog } from './entities/audit-log.entity';
import { Organization } from './entities/organization.entity';
import { Task } from './entities/task.entity';
import { User } from './entities/user.entity';
import { SeedService } from './seed.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Organization, User, Task, AuditLog],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Organization, User, Task, AuditLog]),
    AuthModule,
  ],
  providers: [SeedService],
})

export class AppModule {}