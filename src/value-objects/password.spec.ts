import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";
import { Password } from "./password";


describe('Testing password object', () => {
    let testPassword: string;
    let password: Password;

    describe('Get good Password', () => {
        testPassword = "testtestPasswordPASSWORD";
        password = new Password(testPassword);
        it('Return value', () => {
            expect(password.getValue()).toBe(testPassword);        
        })
    })
    describe('Test validation', () => {
        it('Return min symbols', () => {
            try {
                testPassword = "vvvv";
                password = new Password(testPassword);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid Password')
            }
        })
        it('Return without uppercase symbol', () => {
            try {
                testPassword = "vvvvvvvv";
                password = new Password(testPassword);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid Password')
            }
        })
        it('Return with uppercase symbol', () => {
                testPassword = "testPassword";
                password = new Password(testPassword);
                expect(password.getValue()).toBe(testPassword);   
     
            })
        it('Return max symbols', () => {
            try {
                testPassword = "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv";
                password = new Password(testPassword);
            }
            catch(e) {
                expect(e).toBeInstanceOf(InvalidArgumentException);
                expect(e.message).toBe('Invalid Password')
            }
        })
    })
})