import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Ingredient } from '../../ingredients/models/ingredient.entity';

@Entity('coctails')
export class Coctail {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'coctail_id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    default: 'generic coctail',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  instructions: string;

  @Column({
    type: 'varchar',
  })
  additional_notes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Ingredient, (ingredient) => ingredient.coctail, {
    cascade: true,
    eager: true,
  })
  ingredient: Coctail[];
}
