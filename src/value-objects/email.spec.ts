import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";
import {v4 as uuid4} from 'uuid';
import {validate as validateUUID} from 'uuid';
import { Email } from './email';



describe('Testing ID object', () => {
    let testEmail: string;
    let email: Email;
    beforeEach(() => {
        testEmail = "test@mail.com";
        email = new Email(testEmail);
    })
    describe('Get good email', () => {
        it('Return value', () => {
            expect(email.getValue()).toBe(testEmail);        
        })
    })
    describe('Get bad email', () => {
        it('Return value', () => {
            try {
                testEmail = "test12345";
                email = new Email(testEmail);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid email')
            }
        })
    })
})