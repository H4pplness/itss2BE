import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './database/postgres.module';
import { BookFieldModule } from './modules/book_field/book_field.module';
import { UserModule } from './modules/user/user.module';
import { FieldModule } from './modules/field/field.module';
import { BookPlayerModule } from './modules/book_player/book_player.module';

@Module({
  imports: [PostgresModule,BookFieldModule,UserModule,FieldModule,BookPlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
