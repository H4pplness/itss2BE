import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


export class Match extends BaseEntity { 
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({name : 'fieldId'})
    fieldId : string;

    @Column({name : 'start_time'})
    startTime : Date;

    @Column({name : 'end_time'})
    endTime : Date;
}