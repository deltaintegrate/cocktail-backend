import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';
import { UpdateIngredientDto } from '../dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from '../models/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientRepository.save(createIngredientDto);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  findOne(id: number): Promise<Ingredient | null> {
    return this.ingredientRepository.findOneBy({ id });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientRepository.update(id, updateIngredientDto);
  }

  async remove(id: number): Promise<void> {
    await this.ingredientRepository.delete(id);
  }
}
