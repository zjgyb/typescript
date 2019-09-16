## JS 的数据类型

有`undefined`、`null`、`number`、`string`、`boolean`、`object`还有 ES6 的`symbol`

那 TS 如何声明这些变量呢？

## 基本数据类型

基本类型的声明很简单只需要在声明的变量后加上`: type`，例如

```ts
let u: undefined = undefined;
console.log(u); // undefined

let n: null = null;
console.log(n); // null

let num: number = 5;
console.log(num); // 5

let str: string = "aaa";
console.log(str); // aaa

let bool: boolean = true;
console.log(bool); // true
```

### 注意点

1. 一旦声明了变量类型，之后改变数据类型就会报错：例如

```ts
let num: number = 5;
num = 'aaaa'; // 报错
```

2. 基本数据类型的变量(包含Symbol)一开始都可以赋值给`undefined`

```ts
let num: number = undefined;
num = 4;
console.log(num); // 4
```

3. 对象声明的基本类型的变量定义的时候不能定义基本类型，例如

```ts
let num: Number = new Number(3);
let num1: number = new Number(3); // 报错
```

## symbol

symbol 创建本身就是独一无二的，因此没必要类型声明，直接创建即可，但也可以像基本类型那样加上`:symbol`进行类型声明

```ts
const sym = Symbol("key");

// 经过测试下面两者声明也行
const sym1: symbol = Symbol("key");
const sym2: unique symbol = Symbol("key");
```

## object

对象的类型比较复杂，因为它里面分好多类型，例如`array`、`function`、还有狭义的`object`，因此我会专门放到[第二章](../two/README.md)去讲。

## TS 新增的一些东西

### void

意思是什么都没有的变量，它只能赋值`null`或者`undefined`，如果不复制，默认`undefined`，同时它不能给任何变量赋值。例如

```ts
let unuse: void;
let unuse1: void = null;
console.log(unuse); // undefined
console.log(unuse1); // null
// 不能给任何变量赋值
let u: undefined = unuse; // 报错
```

### any

any允许变量为任何值，声明变量为any类型的有三种方式，一种是一开始就声明any，另一种是一开始声明且不赋值变量，一开始就赋值`null`或者`undefined`变量

```ts
let myVar: any = 5;
myVar = 'aaa';
console.log(myVar); // aaa

let myVar1;
myVar1 = 4;
myVar1 = 'bbb';
console.log(myVar1); // bbb

let myVar2 = undefined;
myVar2 = 'hi';
myVar2 = 5;
console.log(myVar2); // 5
```

### 类型推论

一开始赋值之后当没有定义类型(除了`null`和`undefined`)，那么TS就会自行推断数据类型

```ts
let myVar = 5;
myVar = 'ann'; // 报错
```

### 联合类型

表示取值可以为多种类型，语法`: type | type1 | type2...`

```ts
let myVar: number | string = 'ass';
myVar = 5;
console.log(myVar); // 5
```

## 下一章——对象

[下一章](../two/README.md)