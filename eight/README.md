## 泛型

之前在[第二章](../two/README.md#数组)提到过泛型，那么什么是泛型呢？

> 在定义函数、接口或者类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

### 函数泛型

```ts
// 一个简单的泛型案例，根据传递的参数判断返回参数类型
function num<T>(len: T): Array<T> {
  const numArr = [];
  numArr.push(len);
  return numArr;
}

let getArray = <T>(value: T, times:number = 5): T[] => {
  return new Array(times).fill(value);
}

// 调用
getArray<number>(12);

// 或者
interface GetArray {
  <T>(arg: T, times: number): T[]
}

// 或
interface GetArray<T> {
  (arg: T, times: number): T[]
}
```

### 类的泛型

```ts
class Num<T> {
  value: T;
  add: (x: T, y: T) => T
}

let myNum = new Num<number>();
myNum.value = 0;
myNum.add = (x, y) => x + y;

let myNumStr = new Num<string>();
myNumStr.value = '0';
myNumStr.add = (x, y) => x + y;
```

```ts
const create = <T>(c: new() => T): T => {
  return new c();
}

class Infos {
  public age: number
  constructor() {
    this.age = 18;
  }
}

console.log(create<Infos>(Infos));
```

## 泛型约束

```ts
interface ValueWithLength {
  length: number
}

const getArray = <T extends ValueWithLength>(arg: T, times = 2): T[] => {
  return new Array(times).fill(arg);
}
```

### 高级约束

```ts
let getVal = (obj, key) => {
  return obj[key];
}

let a = {
  a: 'a',
  b: 'b'
}

console.log(getVal(a, 'c')); // 不报错

let getVal = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
}

console.log(getVal(a, 'c')); // 报错
```