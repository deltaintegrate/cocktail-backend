import { Module } from '@nestjs/common';
import { IngredientsService } from './services/ingredients.service';
import { IngredientsController } from './controllers/ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './models/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
