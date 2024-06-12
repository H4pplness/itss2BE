import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Booking } from "src/database/entities/booking.entity";
import { Field } from "src/database/entities/field.entity";
import { Match } from "src/database/entities/match.entity";
import { User } from "src/database/entities/user.entity";
import { BookFieldController } from "./book_field.controller";
import { BookFieldService } from "./book_field.service";
import { FieldModule } from "../field/field.module";
import { UserModule } from "../user/user.module";

@Module({
    imports : [TypeOrmModule.forFeature([User,Field,Match,Booking]),FieldModule,UserModule],
    controllers:[BookFieldController],
    providers: [BookFieldService]
})
export class BookFieldModule {}