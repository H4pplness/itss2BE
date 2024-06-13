import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BookFieldService } from "./book_field.service";
import { FieldRepository } from "../field/field.repository";

@Controller()
export class BookFieldController {
    constructor(private readonly bookFieldService : BookFieldService,
        private readonly fieldRepository : FieldRepository
    ){}
    /**
     * Lấy danh sách những trận đấu người dùng đã đặt 
     */

    @Get('/booking/field')
    getBookingField(@Query('user_id') userId : string){
        return this.bookFieldService.getUserBooking(userId) ;
    }


    /**
     * Đặt sân 
     */
    @Post('/booking/field')
    createBookingField(@Body() body : {userId : string,matchId : string,date : string}){
        return this.bookFieldService.bookingField(body.userId,body.matchId,body.date);
    }
    

    @Get('field')
    getFieldBySport(@Query('sport') sport : string)
    {
        return this.fieldRepository.getFieldBySport(sport);
    }

    @Get('/match')
    getMatchByField(@Query('field_id') fieldId:string,@Query('date') date : string){
        return this.bookFieldService.getMatchByField(fieldId,date);
    }
}