## 元组

之前讲过数组的声明，从之前可以看出数组声明一般是相同类型的对象，如果想要声明不同类型的可以使用泛型，现在还加上另一种方式——元组。元组中允许存储不同类型的元素。

```ts
let info: [string, number] = ["124", 123];

// 等同于
let info: [string, number];
info = ['124', 123];
```

其实在什么都不声明的情况下，数组中有多个类型的数据类型的数组也可以称为元组

```ts
let info = [true, 123, 'aaa', 'ddd'];
```

## 值得注意的是

1. 如果元组一开始有定义类型，那么定义的类型和个数在初始化的时候必须一一对应，并且不能新增

2. 可以对元组进行方法操作，但不允许直接赋值(在定义范围内需符合赋值类型)

```ts
let info: [string, number];
info = ['124', 123];

info.splice(0, 1);
info.push(123);
info.push(12354);
info[0] = 'aaa';

info[0] = 123; // 报错
info[4] = 123; // 报错
```

3. 对元组进行方法操作时需要符合定义的类型

```ts
let info: [string, number];
info = ['124', 123];
info.push(true); // 报错
```

## 下一章

[枚举](../five/README.md)