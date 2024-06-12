import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Field extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name : string;

    @Column()
    location : string;

    @Column()
    sport : string;

    @Column({nullable : true})
    image : string;
}