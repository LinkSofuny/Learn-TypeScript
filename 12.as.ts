// // 断言
// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Pig {
//   name: string;
//   eat(): void;
// }
// function swim(animal: Cat | Pig ) {
//   // 将传进来的参数作为Pig
//   (animal as Pig).eat();
// }
// const tom: Cat = {
//   name: 'tom',
//   run() {console.log(11);
//   }
// }
// swim(tom)

// class Father{
//   height: number = 60
// }
// class Son extends Father {
//   run: boolean = true
// }
// class Daugther extends Father {
//   eat: boolean = true
// }
// function isChildren (child: Father) {
//   if(typeof (child as Daugther).eat === 'function') {
//     return true
//   }
//   return false
// }

function getCacheData(key: string): any {
  return (window as any).cache[key];
}
interface Cat {
  name: string;
  run(): void;
}
const tom: Cat = getCacheData('tom')