import { Module } from '@nestjs/common';
import { CoctailsService } from './services/coctails.service';
import { CoctailsController } from './controllers/coctails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coctail } from './models/coctail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coctail])],
  controllers: [CoctailsController],
  providers: [CoctailsService],
})
export class CoctailsModule {}
