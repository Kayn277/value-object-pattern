import { Body, Controller, Get, Post } from '@nestjs/common';
import { Email } from 'src/value-objects/email';
import { Id } from 'src/value-objects/id';
import { Login } from 'src/value-objects/login';
import { Password } from 'src/value-objects/password';
import { User } from './entity/user.model';
import { UserService } from './user.service';
import {v4 as uuid4} from 'uuid';
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {
        
    }

    @Get('')
    async getAll() {
        return await this.userService.getAll();
    }

    @Post('')
    
    async create(@Body() params) {
        let id = new Id(uuid4());
        let login = new Login(params.login); 
        let password = new Password(params.password); 
        let email = new Email(params.email); 
        let user: User = new User(id, email, login, password);
        
        return await this.userService.create(user);
    }

}
