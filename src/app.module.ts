import { Global, Module } from '@nestjs/common';

import { AppService } from './app.service';
import { CDIController } from './controller/cdi.controller';

@Global()
@Module({
  imports: [],
  controllers: [CDIController ],
  providers: [AppService],
})
export class AppModule {}
