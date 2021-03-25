import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";

export class Password {
    private readonly value: string;
    constructor(value: string) {
        Joi.assert(value, Joi.string().min(6).max(128).custom((value, helper) => {
            let isHaveUpper = false;
            value.split('').forEach(char => {
                
                if(char === char.toUpperCase() && !Number(char)) {
                    isHaveUpper = true;
                }
            })
            
            return isHaveUpper ? value : helper.error('Invalid');
        })
        
        , new InvalidArgumentException('Invalid Password'))
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}