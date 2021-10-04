import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'unimedia',
      password: 'unimedia',
      database: 'test_db',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
