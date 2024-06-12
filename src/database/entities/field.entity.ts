import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Field extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name : string;

    @Column()
    location : string;

    @Column()
    sport : string;
}