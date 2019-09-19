## 其他对象

包含时间、正则、DOM和BOM内置对象

### ECMAScript的内置对象

```ts
const d: Date = new Date();
const r: RegExp = /\w/;
const b: Boolean = new Boolean(3);
const e: Error = new Error('Error occurred');
const xhr: XMLHttpRequest = new XMLHttpRequest();
const formdata: FormData = new FormData();
```

总而言之，谁构造了它，那么类型就是谁

### 预置对象

使用一些常用的方法是TS已经帮你判断类型的工作，不需要自己重复判断，例如：

```js
Math.abs('adfd'); // 报错
const n: any = '2' ** 3; // 报错
```

### ES6的`Map`和`Set`

```ts
const set: Set<number> = new Set();
set.add(1);
// 也可以这样声明
const set1 = new Set<number>();
set1.add(2);

const map = new Map<string, string>();
map.set('a', 'b');
```

### 值得注意的是

1. 有一些对象我没有展开，因为没有看到相关的语法，希望以后发现能够展开
`proxy`, `promise`, `generator`...

2. 还有DOM和BOM的内置对象，我认为这些不是特别重要，也就不展开了，总而言之，需要的时候再整理一下

## 下一章

[元组](../four/README.md)

## 上一章

[对象(函数、数组、狭义的对象)](../two/README.md)