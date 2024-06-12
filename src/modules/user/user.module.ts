import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/database/entities/user.entity";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";

@Module({
    imports : [TypeOrmModule.forFeature([User])],
    controllers : [UserController],
    providers : [UserRepository],
    exports : [UserRepository]
})
export class UserModule {}