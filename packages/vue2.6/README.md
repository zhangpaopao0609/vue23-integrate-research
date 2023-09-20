# 记录

没有 `isVNode` 方法

core: 

```js
export function isVNode(value: any): value is VNode {
  return value ? value.__v_isVNode === true : false
}
```


https://github.com/vuejs/jsx-vue2/tree/dev/packages/babel-preset-jsx#usage