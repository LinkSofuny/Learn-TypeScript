interface Shout {
  wow(): void;
}

class Animal implements Shout{
  protected name;
  protected constructor(name){
    this.name = name
  }
  wow() {
    console.log('1');
  }
}
// 父类补充了wow 所有子类无需添加wow方法
class pig extends Animal implements Shout{
  constructor(name) {
    super(name)
    this.name = name
  }
}

class Person {
  static thingking(): string{
    return 'me'
  }
  public name: string;
  public age: number;
  public call() {
    console.log(this.name + this.age);
  }
}

interface PersonInterface{
  name: string;
  age: number;
  call():void
}
let p1: Person;
let p2: PersonInterface