// 函数声明
function getNum (numA: number, numB: number): number {
  return numA + numB
}
// // 函数表达式
// let getNumber = function getNumber(numA: number, numB: number): number {
//   return numA + numB
// }
// // 給getNumber約束類型
// let getNumber: (x: number, y: number) => number = function getNumber (numA: number, numB: number): number {
//   return numA + numB
// }
// 基於接口的形式約束
interface numberType {
  (numA: number, numB: number): string
}
let getNumb: numberType;
getNumb = function (numA: number, numB: number) {
  return numA + numB + ''
}


//  可选参数不允许出现在必须参数前
function buildName (firstName: string, lastName?: string): string {
  if (lastName) return firstName + ' ' + lastName
  return firstName
}

// 剩余运算符
function push(arr: any[], ...items: any[]) {
  items.forEach( item => {
    arr.push(item)
  })
}

// 重载, 根据传入的类型值决定函数约束类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): string | number {
  if (typeof x === 'number') return Number(x.toString().split('').reverse().join(''))
  if (typeof x === 'string') return x.split('').reverse().join('')
}
