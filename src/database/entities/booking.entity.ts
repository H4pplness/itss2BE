import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({name : 'user_id',type:'uuid',nullable : true})
    userId : string;

    @Column({name : 'match_id',type :'uuid',nullable : true})
    matchId : string;

    @Column({name : 'date',type : 'date'})
    date : string;
}