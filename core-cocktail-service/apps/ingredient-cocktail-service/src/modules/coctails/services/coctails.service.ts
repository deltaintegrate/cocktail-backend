import { Injectable } from '@nestjs/common';
import { CreateCoctailDto } from '../dto/create-coctail.dto';
import { UpdateCoctailDto } from '../dto/update-coctail.dto';
import { Coctail } from '../models/coctail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoctailsService {
  constructor(
    @InjectRepository(Coctail)
    private coctailsRepository: Repository<Coctail>,
  ) {}
  create(createCoctailDto: CreateCoctailDto) {
    return this.coctailsRepository.create(createCoctailDto);
  }

  findAll(): Promise<Coctail[]> {
    return this.coctailsRepository.find();
  }

  findOne(id: number): Promise<Coctail | null> {
    return this.coctailsRepository.findOneBy({ id });
  }

  update(id: number, updateCoctailDto: UpdateCoctailDto) {
    return this.coctailsRepository.update(id, updateCoctailDto);
  }

  async remove(id: number): Promise<void> {
    await this.coctailsRepository.delete(id);
  }
}
