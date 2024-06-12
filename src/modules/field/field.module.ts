import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Field } from "src/database/entities/field.entity";
import { Match } from "src/database/entities/match.entity";
import { FieldRepository } from "./field.repository";
import { Booking } from "src/database/entities/booking.entity";

@Module({
    imports : [TypeOrmModule.forFeature([Field,Match,Booking])],
    providers : [FieldRepository],
    exports : [FieldRepository]
})
export class FieldModule {}