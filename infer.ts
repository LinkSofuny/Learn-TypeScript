// type Func<T> = T extends () => infer R ? R : boolean;

// let func1: Func<number>; // => boolean

// type Obj<T> = T extends {a: infer VType, b: infer VType} ? VType : number;


// promise 响应类型
type PromiseResType<T> = T extends Promise<infer R> ? R : T

// 验证
async function strPromise() {
  return 'string promise'
}

// interface Person {
//   name: string;
//   age: number;
// }
async function personPromise() {
  return {
    name: 'p',
    age: 12
  } as Person
}

type StrPromise = ReturnType<typeof strPromise> // Promise<string>
// 反解
type StrPromiseRes = PromiseResType<StrPromise> // str

type PersonPromise = ReturnType<typeof personPromise> // Promise<Person>
// 反解
type PersonPromiseRes = PromiseResType<PersonPromise> // Person

type Person = {
  name: string;
  age: number;
}
  
  const sem: Person = { name: "semlinker", age: 30 };
  
  type Sem = typeof sem; // type Sem = Person
