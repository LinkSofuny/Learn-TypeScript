class Animal {
    constructor(name) {
        this.name = name;
    }
    wow() {
        console.log('1');
    }
}
// 父类补充了wow 所有子类无需添加wow方法
class pig extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
}
class Person {
    static thingking() {
        return 'me';
    }
    call() {
        console.log(this.name + this.age);
    }
}
let p1;
let p2;
