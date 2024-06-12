import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Booking } from "src/database/entities/booking.entity";
import { Field } from "src/database/entities/field.entity";
import { DataSource, Repository } from "typeorm";

export class FieldRepository extends Repository<Field> {
    constructor(
        @InjectRepository(Field) private readonly fieldRepository : Repository<Field>,
        @InjectRepository(Booking) private readonly bookingRepository : Repository<Booking>,
        @InjectDataSource() private readonly dataSource : DataSource 
    ){
        super(fieldRepository.target,fieldRepository.manager,fieldRepository.queryRunner);
    }

    async getFieldBySport(sport : string){
        return await this.fieldRepository.find({where:{sport : sport}});
    }
}