import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column()
    name : string;

    @Column()
    username : string;

    @Column()
    password : string;

    @Column()
    phone : string;
}