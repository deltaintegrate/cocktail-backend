import { Test, TestingModule } from '@nestjs/testing';
import { IngredientCocktailServiceController } from './ingredient-cocktail-service.controller';
import { IngredientCocktailServiceService } from './ingredient-cocktail-service.service';

describe('IngredientCocktailServiceController', () => {
  let ingredientCocktailServiceController: IngredientCocktailServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IngredientCocktailServiceController],
      providers: [IngredientCocktailServiceService],
    }).compile();

    ingredientCocktailServiceController = app.get<IngredientCocktailServiceController>(IngredientCocktailServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ingredientCocktailServiceController.getHello()).toBe('Hello World!');
    });
  });
});
