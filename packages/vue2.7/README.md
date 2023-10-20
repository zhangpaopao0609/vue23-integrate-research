jsx-vue2 
https://github.com/vuejs/jsx-vue2

jsx 解析器：

https://github.com/vitejs/vite-plugin-vue2-jsx/blob/main/package.json

@vue/babel-preset-jsx

https://github.com/vuejs/jsx-vue2/tree/master#readme


问题 1：
props 如何解决

修改 _mergeJSXProps 方法让使得 {...props} 支持

```js
() => h("div", [h(Todomvc, _mergeJSXProps([{}, baseProps]))])
```

修改 babel-helper-vue-jsx-merge-props 插件

```js
const normalMerge = ['attrs', 'props', 'domProps']
const toArrayMerge = ['class', 'style', 'directives']
const functionalMerge = ['on', 'nativeOn']

const mergeJsxProps = objects =>
  objects.reduce((a, b) => {
    for (const key in b) {
      if (a[key]) {
        if (normalMerge.indexOf(key) !== -1) {
          a[key] = { ...a[key], ...b[key] }
        } else if (toArrayMerge.indexOf(key) !== -1) {
          const arrA = a[key] instanceof Array ? a[key] : [a[key]]
          const arrB = b[key] instanceof Array ? b[key] : [b[key]]
          a[key] = [...arrA, ...arrB]
        } else if (functionalMerge.indexOf(key) !== -1) {
          for (const event in b[key]) {
            if (a[key][event]) {
              const arrA = a[key][event] instanceof Array ? a[key][event] : [a[key][event]]
              const arrB = b[key][event] instanceof Array ? b[key][event] : [b[key][event]]
              a[key][event] = [...arrA, ...arrB]
            } else {
              a[key][event] = b[key][event]
            }
          }
        } else if (key === 'hook') {
          for (let hook in b[key]) {
            if (a[key][hook]) {
              a[key][hook] = mergeFn(a[key][hook], b[key][hook])
            } else {
              a[key][hook] = b[key][hook]
            }
          }
        } else {
          a.props = a.props ? {
            ...a.props,
            [key]: b[key],
          } : { [key]: b[key] }
        }
      } else {
        if ([...normalMerge, ...toArrayMerge, ...functionalMerge].indexOf(key) !== -1) {
          a[key] = b[key]
        } else {
          a.props = a.props ? {
            ...a.props,
            [key]: b[key],
          } : { [key]: b[key] }
        }
      }
    }
    return a
  }, {})

const mergeFn = (fn1, fn2) =>
  function () {
    fn1 && fn1.apply(this, arguments)
    fn2 && fn2.apply(this, arguments)
  }

export default mergeJsxProps
```

问题2：v-slots

同样的解决方式

```js
() => h("div", [h(Todomvc, _mergeJSXProps([{}, baseProps, {
  "directives": [{
    name: "slots",
    value: slots
  }]
}]))])
```

vue2 的 h 函数接收什么格式，`mergeJsxProps` 就格式化成什么格式

```js
const normalMerge = ['attrs', 'props', 'domProps']
const toArrayMerge = ['class', 'style', 'directives']
const functionalMerge = ['on', 'nativeOn']


const mergeJsxProps = objects =>
  objects.reduce((a, b) => {
    for (const key in b) {
      if (key === 'directives') {
        const arr = b[key];
        arr.forEach((v) => {
          if (v.name === 'slots') {
            a.scopedSlots = a.scopedSlots ? { ...a.scopedSlots, ...v.value } : v.value;
          }
        })
      }
      if (a[key]) {
        if (normalMerge.indexOf(key) !== -1) {
          a[key] = { ...a[key], ...b[key] }
        } else if (toArrayMerge.indexOf(key) !== -1) {
          const arrA = a[key] instanceof Array ? a[key] : [a[key]]
          const arrB = b[key] instanceof Array ? b[key] : [b[key]]
          a[key] = [...arrA, ...arrB]
        } else if (functionalMerge.indexOf(key) !== -1) {
          for (const event in b[key]) {
            if (a[key][event]) {
              const arrA = a[key][event] instanceof Array ? a[key][event] : [a[key][event]]
              const arrB = b[key][event] instanceof Array ? b[key][event] : [b[key][event]]
              a[key][event] = [...arrA, ...arrB]
            } else {
              a[key][event] = b[key][event]
            }
          }
        } else if (key === 'hook') {
          for (let hook in b[key]) {
            if (a[key][hook]) {
              a[key][hook] = mergeFn(a[key][hook], b[key][hook])
            } else {
              a[key][hook] = b[key][hook]
            }
          }
        } else {
          a.props = a.props ? {
            ...a.props,
            [key]: b[key],
          } : { [key]: b[key] }
        }
      } else {
        if ([...normalMerge, ...toArrayMerge, ...functionalMerge].indexOf(key) !== -1) {
          a[key] = b[key]
        } else {
          a.props = a.props ? {
            ...a.props,
            [key]: b[key],
          } : { [key]: b[key] }
        }
      }
    }
    return a
  }, {})

const mergeFn = (fn1, fn2) =>
  function () {
    fn1 && fn1.apply(this, arguments)
    fn2 && fn2.apply(this, arguments)
  }

export default mergeJsxProps
```