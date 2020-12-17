## 枚举

我认为 TS 中最有意思的就是枚举了。因为它对枚举值到枚举名进行反向映射。

```ts
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days["Wed"]); // 3
console.log(Days[3]); // Wed
```

### 手动赋值

```ts
enum Days {
  Sun = 8,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days["Wed"]); // 3
console.log(Days[7]); // undefined
console.log(Days[8]); // Sun
```

### 布置增长始终为 1

```ts
enum Days {
  Sun = 8,
  Mon = 1.5,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days["Wed"]); // 3.5
console.log(Days[4.5]); // Thu
```

### 枚举成员的初始化

```ts
enum Color {
  Red = "red".length,
  Green,
  Blue
} // 报错

enum Color {
  Green,
  Blue,
  Red = "r".length
} // 不报错
console.log(Color[1]); // Red
```

### 常数枚举&外部枚举

> 常数枚举是使用`const enum`定义的枚举类型
> 外部枚举是使用`declare enum`定义的枚举类型

### 常数枚举

不编译成对象

这两个我认为暂时没什么使用场景，所以先介绍概念，先占个位。

## 下一章

[类](../six/README.md)