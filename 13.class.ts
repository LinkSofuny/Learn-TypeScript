
class Animal {
  protected name;
  protected constructor(name){
    this.name = name
  }
}


class pig extends Animal {
  constructor(name) {
    super(name)
    this.name = name
  }
}