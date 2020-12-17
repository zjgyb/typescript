## 高级类型

### 联合类型

```ts
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = {
    ...arg1,
    ...arg2
  }
  return res;
}

console.log(mergeFunc({a: 1}, {b: 2}));
```

### 类型保护

`typeof`：string、number、boolean、symbol中的一种

### 类型别名

```ts
type TypeString = string;
let str: TypeString = 'a';
```