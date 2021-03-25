import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.model';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
        
    }


    async getAll() {
        return this.userRepository.find();
    }
    async create(user: User) {
        console.log('create ', user);
        return this.userRepository.save(user);
    }
}
