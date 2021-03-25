class v {

    static validatePassword(value: string) {
        let isHaveUpper = false;
        value.split('').forEach(char => {
            
            if(char === char.toUpperCase() && !Number(char)) {
                console.log('Сравниваем: ', char, ' ', char.toUpperCase());
                isHaveUpper = true;
            }
        })
            
        
        return isHaveUpper;
    }

}


console.log(v.validatePassword('s56U9555'));
console.log(v.validatePassword('s56u9555'));