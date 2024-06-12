import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({name : 'user_id'})
    userId : string;

    @Column({name : 'match_id'})
    matchId : string;

    @Column({name : 'date'})
    date : Date;
}