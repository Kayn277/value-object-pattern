import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";
import {v4 as uuid4} from 'uuid';
import {validate as validateUUID} from 'uuid';
import { Login } from './login';



describe('Testing login object', () => {
    let testLogin: string;
    let login: Login;
    beforeEach(() => {
        testLogin = "testLogin";
        login = new Login(testLogin);
    })
    describe('Get good login', () => {
        it('Return value', () => {
            expect(login.getValue()).toBe(testLogin);        
        })
    })
    describe('Get bad login', () => {
        it('Return min symbols', () => {
            try {
                testLogin = "vv";
                login = new Login(testLogin);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid login')
            }
        })

        it('Return max symbols', () => {
            try {
                testLogin = "vvvvvvvvvvvvvvvvvvv";
                login = new Login(testLogin);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid login')
            }
        })
    })
})