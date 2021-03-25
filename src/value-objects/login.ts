import * as Joi from "joi";
import { InvalidArgumentException } from "node-exceptions";

export class Login {
    private readonly value: string;
    constructor(value: string) {
        Joi.assert(value, Joi.string().required().min(3).max(15), new InvalidArgumentException('Invalid login'))
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}