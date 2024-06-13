import { InjectRepository } from "@nestjs/typeorm";
import { BookingPlayer } from "src/database/entities/bookingplayer.entity";
import { Invitation } from "src/database/entities/invitation.entity";
import { User } from "src/database/entities/user.entity";
import { Brackets, Repository } from "typeorm";

export class BookPlayerRepository extends Repository<BookingPlayer> {
    
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(BookingPlayer) private readonly bookingPlayerRepository: Repository<BookingPlayer>,
        @InjectRepository(Invitation) private readonly invitationRepository: Repository<Invitation>
    ) {
        super(bookingPlayerRepository.target, bookingPlayerRepository.manager, bookingPlayerRepository.queryRunner);
    }

    async getBookingPlayer(startTime: string, endTime: string, date: string,sport : string,userId : string) {
        return await this.bookingPlayerRepository.createQueryBuilder("booking_player")
            .select('booking_player.date,booking_player.start_time,booking_player.end_time,booking_player.id')
            .addSelect('user.name')
            .addSelect('user.id','user_id')
            .innerJoin('user','user','booking_player.user_id = user.id ')
            .where("booking_player.date = :date", { date: date })
            .andWhere("booking_player.sport = :sport",{sport:sport})
            .andWhere("booking_player.status = false")
            .andWhere("user.id != :userId",{userId})
            .andWhere(
                new Brackets(qb => {
                    qb.where("booking_player.start_time BETWEEN :startTime AND :endTime", { startTime: startTime, endTime: endTime })
                        .orWhere("booking_player.end_time BETWEEN :startTime AND :endTime", { startTime: startTime, endTime: endTime });
                })
            )
            .getRawMany();
    }

    async getInvitation(userId: string) {
        return await this.invitationRepository.createQueryBuilder('invitation')
            .select('invitation.booking_player_id,invitation.status,invitation.id')
            .addSelect('user.id as user_id , user.name')
            .addSelect('booking_player.start_time,booking_player.end_time,booking_player.date')
            .innerJoin('booking_player', 'booking_player', 'booking_player.id = invitation.booking_player_id')
            .innerJoin('user', 'user', 'invitation.inviter = user.id')
            .where('booking_player.user_id = :userId', { userId: userId })
            .getRawMany();
    }

    async createBookingPlayer(userId: string, startTime: string, endTime: string, date: string,sport : string) {
        const newBookingPlayer = new BookingPlayer();
        newBookingPlayer.date = date;
        newBookingPlayer.userId = userId;
        newBookingPlayer.start_time = startTime;
        newBookingPlayer.end_time = endTime;
        newBookingPlayer.sport = sport;
        return await newBookingPlayer.save();
    }

    async invitePlayer(userId: string, bookingPlayerId: string) {
        const newInvitation = new Invitation();
        newInvitation.bookingPlayerId = bookingPlayerId;
        newInvitation.inviter = userId;
        return await newInvitation.save();
    }

    async changeInvitationStatus(status: string, invitationId: string) {
        return await this.invitationRepository.update(invitationId, { status: status });
    }

    async getListBookingPlayer(userId: string) {
        return await this.bookingPlayerRepository.find({where:{userId}});
    }
}