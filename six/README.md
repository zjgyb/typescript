## 类

### 概念

[来源](https://ts.xcatliu.com/advanced/class)

+ 类(Class): 定义了一件事物的抽象特点，包含它的属性和方法
+ 对象(Object): 类的实例，通过`new`生成
+ 面向对象(OOP)的三大特征: 封装、继承、多态
+ 封装: 将数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法随意更改对象内部的数据
+ 继承: 子类继承父类，子类除了拥有父类的所有特性之外，还有一些更具体的特征
+ 多态: 由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
+ 存取器(getter & setter): 用以改变属性的读取和赋值行为
+ 修饰器: 修饰符一些关键字，用于限定成员或类型的性质
+ 抽象类: 抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
+ 接口: 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现。一个类只能继承自另一个类，但是可以实现多个接口。

### 修饰符

TS中有三种修饰符，分别是`public`、`private`、`protected`
+ `public`属性或方法公有，任何地方都能访问到
+ `private`属性或方法私有，不能在外部访问
+ `protected`和`private`类似，区别是子类能够访问

```ts
class People {
  public name: string;
  private thinking: boolean = true;
  protected weight: number = 65;
  constructor(name) {
    this.name = name;
  }
  public diff() {
    return this.thinking;
  }
}

class Tony extends People {
  constructor(name) {
    super(name);
  }

  public say() {
    return this.weight;
  }

  public getThinking() {
    return this.thinking; // 报错
  }
}

let a = new People('David');
console.log(a.name); // David
console.log(a.diff());
console.log(a.thinking); // 报错
console.log(a.weight); // 报错

let b = new Tony('tony');
console.log(b.say()); // 65
```

### readonly 只读属性

```ts
class People {
  readonly name;
  constructor(name) {
    this.name = name;
    this.name = 'Hi';
    this.name = 'hello';
  }
  changeName() {
    return this.name = 'abc'; // 报错，不允许修改
  }
}

let a = new People('Tony');
console.log(a.name); // hello
```

### 抽象类

`abstract`用于定义抽象类和其中的抽象方法。

需要注意的是：

1. 不允许实例化
2. 抽象类中的抽象方法**必须**被子类实现

```ts
abstract class People {
  public name;
  constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Tony extends People {
  sayHi() {
    return `Hi, My name is ${this.name}`;
  }
}
// 报错 没有继承抽象方法
class Jack extends People {
}

let a = new Tony('Tony1');
console.log(a.sayHi()); // Hi, My name is Tony1

let b = new People('Tony'); // 报错 抽象方法不能被实例化
```

### 类型判断

属性或者函数后面对数据类型进行判断

```ts
abstract class People {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public abstract sayHi();
}

class Tony extends People {
  sayHi(): string {
    return `Hi, My name is ${this.name}`;
  }
}

let a = new Tony('Tony1');
console.log(a.sayHi()); // Hi, My name is Tony1
```

## 下一章

[类与接口](../seven/README.md)
