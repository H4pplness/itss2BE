import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookingPlayer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: "user_id" ,type:'uuid',nullable:true})
    userId: string;

    @Column({ name: "date", type: 'date' })
    date: string

    @Column({ name: "start_time", type: 'time' })
    start_time: string;

    @Column({ name: "end_time", type: 'time' })
    end_time: string;

    @Column({default : 'football'})
    sport : string;

    @Column({default : false})
    status : boolean;
}