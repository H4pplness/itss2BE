import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Match extends BaseEntity { 
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({name : 'field_id',type:'uuid',nullable:true})
    fieldId : string;

    @Column({name : 'start_time',type:'time'})
    startTime : Date;

    @Column({name : 'end_time' , type : 'time'})
    endTime : Date;

    @Column({name : 'price',nullable:true})
    price : number;
}