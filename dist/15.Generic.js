function getNum(arg) {
    return arg;
}
let arr = [1, 2, 3, 4];
getNum(arr);
function getArr(arg) {
    console.log(arg.length);
    return arg;
}
getArr(arr);
let createArray;
createArray = function (length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray(4, 'ok');
class Generic {
}
let A = new Generic();
function func(a, b) {
    return a;
}
