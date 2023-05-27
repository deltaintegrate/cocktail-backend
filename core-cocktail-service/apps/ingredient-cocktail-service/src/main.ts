import { NestFactory } from '@nestjs/core';
import { IngredientCocktailServiceModule } from './ingredient-cocktail-service.module';

async function bootstrap() {
  const app = await NestFactory.create(IngredientCocktailServiceModule);
  await app.listen(3002);
}
bootstrap();
