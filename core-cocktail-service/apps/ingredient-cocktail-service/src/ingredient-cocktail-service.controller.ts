import { Controller, Get } from '@nestjs/common';
import { IngredientCocktailServiceService } from './ingredient-cocktail-service.service';

@Controller()
export class IngredientCocktailServiceController {
  constructor(
    private readonly ingredientCocktailServiceService: IngredientCocktailServiceService,
  ) {}

  @Get()
  getHello(): string {
    return this.ingredientCocktailServiceService.getHello();
  }
}
