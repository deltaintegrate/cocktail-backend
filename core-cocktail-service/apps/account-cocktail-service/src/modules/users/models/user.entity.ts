import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Role } from '../../roles/models/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', {
    name: 'user_id',
  })
  id: number;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    default: '',
  })
  full_name: string;

  @Column({
    type: 'varchar',
    length: 25,
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
    default: '',
  })
  phone: string;

  @Column({
    nullable: false,
    default: false,
  })
  is_deleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Role, { cascade: true, eager: true })
  @JoinColumn()
  role: Role;
}
