import { Test, TestingModule } from '@nestjs/testing';
import { CoctailsController } from './coctails.controller';
import { CoctailsService } from '../services/coctails.service';

describe('CoctailsController', () => {
  let controller: CoctailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoctailsController],
      providers: [CoctailsService],
    }).compile();

    controller = module.get<CoctailsController>(CoctailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
