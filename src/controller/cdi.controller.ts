import { Controller, Get } from "@nestjs/common";
import {  ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppService } from "src/app.service";

@Controller('/v1')
export class CDIController {     
    constructor(private readonly service: AppService){}
    
    @ApiTags('cdi')
    @ApiResponse({ status: 200, description: 'The request has been successfully.'})
    @ApiResponse({ status: 400, description: 'Bad Request.'})
    
    @Get('/cdi')
    async cdiApp(){
      return this.service.getCDI();
   }
}