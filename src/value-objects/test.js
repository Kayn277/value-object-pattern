var v = /** @class */ (function () {
    function v() {
    }
    v.validatePassword = function (value) {
        var isHaveUpper = false;
        value.split('').forEach(function (char) {
            if (char === char.toUpperCase() && !Number(char)) {
                console.log('Сравниваем: ', char, ' ', char.toUpperCase());
                isHaveUpper = true;
            }
        });
        return isHaveUpper;
    };
    return v;
}());
console.log(v.validatePassword('s56U9555'));
console.log(v.validatePassword('s56u9555'));
