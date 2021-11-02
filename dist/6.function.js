// 函数声明
function getNum(numA, numB) {
    return numA + numB;
}
let getNumb;
getNumb = function (numA, numB) {
    return numA + numB + '';
};
//  可选参数不允许出现在必须参数前
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + ' ' + lastName;
    return firstName;
}
// 剩余运算符
function push(arr, ...items) {
    items.forEach(item => {
        arr.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number')
        return Number(x.toString().split('').reverse().join(''));
    if (typeof x === 'string')
        return x.split('').reverse().join('');
}
