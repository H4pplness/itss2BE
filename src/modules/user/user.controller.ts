import { Body, Controller, Get, NotFoundException, Query } from "@nestjs/common";
import { UserRepository } from "./user.repository";


@Controller('user')
export class UserController {
    constructor(private readonly userRepository : UserRepository){}

    @Get('/info')
    getUserInfo(@Query('user_id') userId : string){
        return this.userRepository.getUserInfo(userId);
    }

    @Get('/login')
    async login(@Body() body : {username : string,password : string}){
        const user = await this.userRepository.findOne({
            where : {
                username : body.username,
                password : body.password
            }
        })

        if(user){
            return {userId : user.id};
        }else{
            throw new NotFoundException();
        }
    }
}