import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Booking } from "src/database/entities/booking.entity";
import { Field } from "src/database/entities/field.entity";
import { Match } from "src/database/entities/match.entity";
import { User } from "src/database/entities/user.entity";

@Module({
    imports : [TypeOrmModule.forFeature([User,Field,Match,Booking])]
})
export class BookFieldModule {}