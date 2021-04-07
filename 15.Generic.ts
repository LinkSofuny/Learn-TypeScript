function getNum<T>(arg: T): T{
  return arg
}
let arr = [1,2,3,4]
getNum(arr)

interface Lengthwise {
  length: number;
}

function getArr<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg
}
getArr(arr)


interface CreateArrFunc<T> {
  (length: number, value: T): Array<T>
}

let createArray: CreateArrFunc<any>


createArray = function <T>(length: number, value: T): Array<T>{
  let result: T[] = [];
  for (let i  = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(4, 'ok')

class Generic<T> {
  Value: T;
  add: (x: T, y: T) => T
} 
let A = new Generic<number>()

function func<T = number> (a: T, b: T): T{
  return a
}