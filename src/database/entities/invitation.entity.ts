import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invitation extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({type:'uuid'})
    inviter : string; // Id người mời 

    @Column({type :'uuid',name : 'booking_player_id'})
    bookingPlayerId : string;  // Id booking tìm đối 
    /**
     * 3 trạng thái là waiting , accepted , denied 
     */
    @Column({default : 'waiting'})
    status : string;
}