import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BookPlayerRepository } from "./book_player.repository";

@Controller('booking/player')
export class BookPlayerController {
    constructor(private readonly bookingPlayerRepository: BookPlayerRepository) { }

    //done
    @Get('/get-booking-player')
    getBookingPlayer(@Query('start_time') startTime: string, @Query('end_time') endTime: string, @Query('date') date: string, @Query('sport') sport: string) {
        return this.bookingPlayerRepository.getBookingPlayer(startTime, endTime, date, sport);
    }

    //done
    @Post('invite')
    invitePlayer(@Body() body: { inviterId: string, bookingPlayerId: string }) {
        return this.bookingPlayerRepository.invitePlayer(body.inviterId, body.bookingPlayerId);
    }

    // done
    @Get('invite')
    getInvitation(@Query('user_id') userId: string) {
        return this.bookingPlayerRepository.getInvitation(userId);
    }

    //done
    @Post('new-booking-player')
    createBookingPlayer(@Body() body: { userId: string, date: string, startTime: string, endTime: string, sport: string }) {
        return this.bookingPlayerRepository.createBookingPlayer(body.userId, body.startTime, body.endTime, body.date, body.sport);
    }

    //done
    @Post('update-invitation')
    updateInvitation(@Query('invitation_id') invitationId: string, @Query('status') status: string) {
        return this.bookingPlayerRepository.changeInvitationStatus(status, invitationId);
    }
}