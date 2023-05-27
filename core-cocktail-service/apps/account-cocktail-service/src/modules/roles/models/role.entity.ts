import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    name: 'id_name',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    default: true,
  })
  role_name: string;

  @Column({
    nullable: false,
    default: true,
  })
  is_deleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
