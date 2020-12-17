## 对象

包含数组、函数以及狭义的对象

- [狭义的对象](##定义狭义的对象)
- [数组](##数组)
- [函数](##函数)

## 定义狭义的对象

```ts
interface Person {
  name: String;
  age: Number;
}

const tony: Person = {
  name: "tony",
  age: 123
};
```

接口和对象必须保持一致，对象新增或者减少属性都会报错，同时接口声明的属性类型在定义对象中的属性类型必须一致，否则报错

```ts
interface Person {
  name: String;
  age: Number;
}

// 报错
const tony: Person = {
  name: "tony",
  age: 123,
  sex: "max"
};

// 报错
const tony: Person = {
  name: "tony"
};
```

### 属性可选

只需要在定义接口的时候属性后加`?`，在定义的对象中就可以选择性的添加或不添加

```ts
interface Person {
  name: String;
  age?: Number;
}

// 正常
const tony: Person = {
  name: 'tony'
}
```

### 任意属性值类型 | 任意属性值

任意属性值只需要添加`any`，任意属性需要用`[name: type]`

任意属性值：

```ts
interface Person {
  name: String,
  age: any
}

const tony: Person = {
  name: 'tony',
  age: '23',
}

tony.age = 23;
console.log(tony);
```

任意属性：

添加了任意属性之后可以添加多个属性，并且添加的属性值符合定义时的数据类型

```ts
interface Person {
  name: String,
  age: any,
  [propName: string]: any
}

const tony: Person = {
  name: 'tony',
  age: '23',
  'addd': 'a',
  123: 'd'
}
```

也可以通过其他变量赋值的方式比较多余值的校验


```ts
interface Person {
  name: String,
  age: any
}

const tom = {
  name: 'tony',
  age: '23',
  'addd': 'a',
  123: 'd'
}

const tony: Person = {
  ...tom
}
```

#### 注意点

1. 根据JS对象特点，属性只能是`Number`和`String`类型两者之一，不能是联合类型(属性值可以是联合类型)，如果属性是`String`类型，那么对象中有`Number`类型是允许的，如果属性是`Number`类型，那么`String`类型是不允许的，例如：

```ts
interface Person {
  name: String;
  age: any,
  [propName: string]: any
}
const tony: Person = {
  name: 'tony',
  age: '23',
  'addd': 'a',
  123: 'd'
}

interface Person1 {
  name: String;
  age: any,
  [propName: number]: any
}
// 报错
const tony1: Person1 = {
  name: 'tony',
  age: '23',
  'addd': 'a', // 不能是String类型
  123: 'd'
}
```

2. 同一种任意属性不允许重复声明，不同类型可以声明

```ts
interface Person {
  name: String;
  age: any,
  [s: string]: any,
  [a: string]: any // 报错
}

// 不报错
interface Person1 {
  name: String;
  age: any,
  [s: string]: any,
  [a: number]: any
}
```

### 只读属性

有时候我们希望一个值定义之后不希望被修改，因此在定义接口的时候有个`readonly`，放到属性声明的前面

```ts
interface Person {
  readonly id: Number,
  name: String;
  age: number | string
}

const tony: Person = {
  id: 123,
  name: 'tony',
  age: 23
}

// 如果修改就会报错
tony.id = 3;
```

但需要注意的是**只读的约束于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**，例如：

```ts
interface Person {
  readonly id?: Number,
  name: String;
  age: number | string,
  [propName: number]: any
}

const tony: Person = {
  name: 'tony',
  age: 23,
  123: 'd'
}

console.log(tony.id); // undefined

// 报错，因为一开始没有赋值，那么tony.id永远是undefined
tony.id = 4;
```

## 数组

定义的方法有很多

1. (类型 + 方括号)表示法

数组中不允许出现于定义不符的类型

```ts
let names: string[] = ['Tony', 'Tom', 'David'];
let numAndStr: (string | number)[] = [1, '2'];

// 报错
names.push(3);
```

2. 泛型

具体概念会在之后的章节描述，这里先占位。如果像数组内类型不止一种，那么可以考虑使用泛型

```ts
const names: Array<string> = ['Tony', 'Tom', 'David'];

const names: Array<string> = ['Tony', 'Tom', 'David'];
const namesAndNums: Array<string | number> = ['Tony', 'Tom', 'David'];
// 不报错
namesAndNums.push(404);
```

3. 接口(类似于狭义对象声明)

```ts
interface Name {
  [index: number]: number | String;
}

const names: Name = [1, 3, 4, 4, 'aaa'];
```

## 函数

函数中需要使用类型检查的是参数和返回值，函数分为两种：一种是函数声明，另一种一种是函数表达式

### 函数声明

```ts
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);
```

### 函数表达式

```ts
let sum = function(x: number, y: number): number {
  return x + y;
}

// 还可以
type sumFn = (num1: number, num2: number) => number
let sum: sumFn = function(x, y) {
  return x + y;
}
```

注意：上面的表达式存在一个问题，等式右边虽然是有类型判断，等式左边却没有，所有左边就会自动类型判断。

如果想要等式左边也有类型判断，那么：

```ts
// 注意这里的 => number只是类型判断
let sum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

// 箭头函数形式
let sum1: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
}

// 接口形式
interface Sum {
  (x: number, y: number): number;
}
let sum2: Sum = (x: number, y: number): number => {
  return x + y;
}
```

### 无值返回void

**以下都用函数声明来演示**

```ts
function printName(name: string): void {
  console.log(name)
}
```

### 参数可选

```ts
function printName(name: string, age?: number): void {
  console.log(name, age);
}
```

### 默认值

```ts
function printName(name: string = 'Tom', age?: number): void {
  console.log(name, age); // Tom
}

printName();
```

### rest运算符

```ts
function printName(name: string = 'Tom', ...arr: any[]): void {
  console.log(name); // tony
  console.log(arr); // ['1', 'hello', true]
}
const arr = ['1', 'hello', true];
console.log(printName('tony', ...arr));
```

### 重载

直接抄袭参考教程的例子

```ts
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
```

为了表达的更加清楚，可以多次重复定义

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
```

### 注意点

1. 函数在调用的时候传入的参数不能多于定义时的参数或者少于定义时的参数(除非参数有默认值)

2. 函数返回值应符合定义时返回的类型

3. 使用rest参数时注意

```ts
function maxValue(x: number, ...arr: any[]): number {
  return Math.max(x, ...arr);
}
const arr = [1, 2, 4, 5, 4];
console.log(maxValue(1, ...arr)); // 5

const arr1 = [1, 3, 4, true];
console.log(maxValue(...arr1)); // 报错, 未提供x变量
```

当然，除了函数、数组之外还有其他的对象，比如时间、正则这些，我将在下一章进行记录。

## 下一章

[其他对象](../three/README.md)

## 上一章
[JS 的数据类型](../one/README.md)
