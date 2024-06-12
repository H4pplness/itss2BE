import { Injectable } from "@nestjs/common";
import { FieldRepository } from "../field/field.repository";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository, createQueryBuilder } from "typeorm";
import { Booking } from "src/database/entities/booking.entity";
import { Match } from "src/database/entities/match.entity";

@Injectable()
export class BookFieldService {
    constructor(
        private readonly fieldRepository: FieldRepository,
        @InjectDataSource() private readonly dataSource: DataSource,
        @InjectRepository(Booking) private readonly bookingRepository : Repository<Booking>
    ) { }

    async getUserBooking(userId: string) {
        return await this.dataSource.createQueryBuilder(Booking, 'booking')
            .select('booking.date')
            .addSelect('u.id', 'userId')
            .addSelect('u.name', 'username')
            .addSelect('m.start_time', 'startTime')
            .addSelect('m.end_time', 'endTime')
            .addSelect('m.fieldname', 'fieldname')
            .addSelect('m.location', 'location')
            .innerJoin('user', 'u', 'booking.user_id = u.id')
            .innerJoin(qb => qb
                .select('match.id', 'id')
                .addSelect('match.field_id', 'field_id')
                .addSelect('match.start_time', 'start_time')
                .addSelect('match.end_time', 'end_time')
                .addSelect('field.location', 'location')
                .addSelect('field.name', 'fieldname')
                .from('match', 'match')
                .innerJoin('field', 'field', 'match.field_id = field.id'), 'm', 'booking.match_id = m.id')
            .where('booking.user_id = :userId', { userId: userId })
            .where('booking.date >= :startDate', { startDate:new Date() })
            .getRawMany();

    }

    async bookingField(userId : string,matchId : string,date : string){
        const newBooking = new Booking();
        newBooking.userId = userId;
        newBooking.date = date;
        newBooking.matchId = matchId;

        return await newBooking.save();
    }

    async getMatchByField(fieldId: string, date: string) {
        return await this.dataSource.createQueryBuilder(Match,'match')
            .select('match.id,match.start_time,match.end_time,match.price')
            .addSelect('field.name')
            .innerJoin('field','field','field.id = match.field_id')
            .where('field.id = :fieldId',{fieldId:fieldId})
            .where('match.id NOT IN (SELECT match_id as id FROM booking where date = :date)',{date})
            .orderBy('match.start_time')
            .getRawMany();
    }
}