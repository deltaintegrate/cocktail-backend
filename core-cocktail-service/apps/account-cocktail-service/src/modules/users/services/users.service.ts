import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';
import { Role } from '../../roles/models/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}
  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id }, updateUserDto);
  }

  async remove(id: number) {
    const userExist = await this.usersRepository.findOne({
      where: [{ id: id }, { is_deleted: false }],
    });
    if (!userExist) {
      throw new HttpException('USER_ALREADY_DELEATED', 404);
    }
    const updated = await this.usersRepository.findOneBy({ id });
    updated.is_deleted = true;
    return await this.usersRepository.save(updated);
  }

  async setRoleToUser(userid: number, roleid: number) {
    const userExist = await this.usersRepository.findOne({
      where: [{ id: userid }, { is_deleted: false }],
    });
    const roleExist = await this.roleRepository.findOne({
      where: { id: roleid },
    });
    if (!userExist) {
      throw new HttpException('USER_ALREADY_DELEATED', 404);
    }
    if (!roleExist) {
      throw new HttpException('ROLE_NO_EXIST', 404);
    }

    userExist.role = roleExist;
    console.log(userExist);
    return this.usersRepository.save(userExist);
  }
}
