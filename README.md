探索 vue23 整合

## 2023.10.9 讨论

- 结论：大体采用运行时适配方案 + 编译时适配

- 遗留问题
1. props 差异
  vue2 传递 props 方式
  ```vue
  <Comp
    props={props}
  />
  ```
    vue3 传递 props 方式
  ```vue
  <Comp
    {...props}
  />
  ```

2. on 问题