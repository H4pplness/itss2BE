import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookingPlayer } from "src/database/entities/bookingplayer.entity";
import { Invitation } from "src/database/entities/invitation.entity";
import { User } from "src/database/entities/user.entity";
import { BookPlayerController } from "./book_player.controller";
import { BookPlayerRepository } from "./book_player.repository";

@Module({
    imports : [TypeOrmModule.forFeature([User,BookingPlayer,Invitation])],
    controllers : [BookPlayerController],
    providers : [BookPlayerRepository]

})
export class BookPlayerModule {}