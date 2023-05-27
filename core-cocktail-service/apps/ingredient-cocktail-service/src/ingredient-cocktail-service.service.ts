import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientCocktailServiceService {
  getHello(): string {
    return "Hi I'm ingredient cocktail service";
  }
}
