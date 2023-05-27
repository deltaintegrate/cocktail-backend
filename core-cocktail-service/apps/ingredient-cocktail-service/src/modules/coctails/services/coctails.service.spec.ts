import { Test, TestingModule } from '@nestjs/testing';
import { CoctailsService } from './coctails.service';

describe('CoctailsService', () => {
  let service: CoctailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoctailsService],
    }).compile();

    service = module.get<CoctailsService>(CoctailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
