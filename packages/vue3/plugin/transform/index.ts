export const transformAdapter = () => ({
  name: 'transform-adapter',
  transform(code, id) {
    const adapterReg = /from "@zhangpaopao\/adapter/g;
    code = code.replace(adapterReg, 'from "./vue3');

    return code;
  }
})
