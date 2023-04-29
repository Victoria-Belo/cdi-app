import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";

@Controller('/v1')
export class CDIController {     
    constructor(private readonly service: AppService){}
    
    @Get('/cdi')
    async cdiApp(){
      return this.service.getCDI();
   }
}