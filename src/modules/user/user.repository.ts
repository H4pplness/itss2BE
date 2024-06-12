import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { Repository } from "typeorm";

export class UserRepository extends Repository<User>{
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>){
        super(userRepository.target,userRepository.manager,userRepository.queryRunner);
    }

    async getUserInfo(userId : string){
        return await this.userRepository.findOne({select:['id','name','phone','username'],where : {id : userId}})
    }
}