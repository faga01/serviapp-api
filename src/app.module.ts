import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TecnicosModule } from './tecnicos/tecnicos.module';

@Module({
  imports: [TecnicosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
