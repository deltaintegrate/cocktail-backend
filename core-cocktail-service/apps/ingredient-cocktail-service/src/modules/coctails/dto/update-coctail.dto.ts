import { PartialType } from '@nestjs/mapped-types';
import { CreateCoctailDto } from './create-coctail.dto';

export class UpdateCoctailDto extends PartialType(CreateCoctailDto) {
  id: number;
}
