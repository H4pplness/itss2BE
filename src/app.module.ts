import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './database/postgres.module';
import { BookFieldModule } from './modules/book_field/book_field.module';

@Module({
  imports: [PostgresModule,BookFieldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
