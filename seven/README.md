## 类与接口

> 什么是接口？接口是对对象的描述。之前的`interface`就是接口的使用。

接口还有一个用途就是对类的一部分行为进行抽象。最大的用处就是不同类之间有公有特性，可以把这些公有特性抽象出来。

例如：飞机和鸟都能飞行

```ts
class Plane {
  fly() {
    console.log('plane can fly');
  }
}

class Bird {
  fly() {
    console.log('bird can fly');
  }
}
```

对公共方法进行抽象

```ts
interface Fly {
  fly();
}

class Plane implements Fly {
  fly() {
    console.log('plane can fly');
  }
}

class Bird implements Fly {
  fly() {
    console.log('bird can fly');
  }
}
```

### 多个接口实现

```ts
interface MakeSound {
  makeSound();
}

class Pig {
  makeSound() {
    console.log('henhenhen');
  }
}

// 但是鸟也可以发出叫声，于是可以使用多个接口
class Bird implements Fly, MakeSound {
  fly() {
    console.log('bird can fly');
  }

  makeSound() {
    console.log('birbirbir');
  }
}
```

### 接口继承接口

```ts
interface Fly {
  fly();
}

interface FlyAndMakeSound extends Fly {
  makeSound();
}

class Bird implements FlyAndMakeSound {
  fly() {
    console.log('bird can fly');
  }

  makeSound() {
    console.log('birbirbir');
  }
}
```

### 接口继承类

```ts
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

### 混合类型

返回对象形式接口定义

```ts
interface Person {
  name: String,
  age: Number,
  sex: String
}

function getInfo(name: String, age: Number): Person {
  return {
    name,
    age,
    sex: 'unknow'
  }
}
```

## 下一章

[泛型](../eight/README.md)