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