import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoctailsService } from '../services/coctails.service';
import { CreateCoctailDto } from '../dto/create-coctail.dto';
import { UpdateCoctailDto } from '../dto/update-coctail.dto';

@Controller('cocktailes')
export class CoctailsController {
  constructor(private readonly coctailsService: CoctailsService) {}

  @Post()
  create(@Body() createCoctailDto: CreateCoctailDto) {
    return this.coctailsService.create(createCoctailDto);
  }

  @Get()
  findAll() {
    return this.coctailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coctailsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') updateCoctailDto: UpdateCoctailDto) {
    return this.coctailsService.update(updateCoctailDto.id, updateCoctailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coctailsService.remove(id);
  }
}
