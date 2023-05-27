import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Coctail } from '../../coctails/models/coctail.entity';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'ingredient_id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    default: '',
  })
  name: string;

  @Column()
  is_deleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Coctail, (coctail) => coctail.ingredient)
  coctail: Coctail;
}
