import { Email } from "src/value-objects/email";
import { Id } from "src/value-objects/id";
import { Login } from "src/value-objects/login";
import { Password } from "src/value-objects/password";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @Column({primary: true, type: 'uuid', transformer: {
        to: (value: Id) => {return value.getValue()},
        from: (value: string) => {return new Id(value)}
    }})
    id: Id;

    @Column({type: 'varchar', transformer: {
        to: (value: Email) => {return value.getValue()},
        from: (value: string) => {return new Email(value)}
    }})
    email: Email;

    @Column({type: 'varchar', length: 15, transformer: {
        to: (value: Login) => {return value.getValue()},
        from: (value: string) => {return new Login(value)}
    }})
    login: Login;

    @Column({type: 'varchar', length: 128, transformer: {
        to: (value: Password) => {return value.getValue()},
        from: (value: string) => {return new Password(value)}
    }})
    password: Password;

    constructor(id: Id, email: Email, login: Login, password: Password) {
        this.id = id;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}