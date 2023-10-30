export const transformAdapter = () => ({
  name: 'transform-adapter',
  transform(code, id) {
    const adapterReg = /from "@zhangpaopao\/adapter/g;
    code = code.replace(adapterReg, 'from "./vue2.7');
    
    return code;
  }
})

export const transformBeforePlugin = () => ({
  name: 'transform-before',
  transform(code, id) {
    const slots = /v-slots/g;
    code = code.replace(slots, 'scopedSlots');

    const props = /\{\s*\.\.\.([^\s\}]+)\s*\}/g;
    code = code.replace(props, (match, capturedValue) => {
      return `props={ ${capturedValue} }`;
    });

    return code
  }
})

export const transformAfterPlugin = () => ({
  name: 'transform-after',
  transform(code, id) {
    
    // console.log(code);

    return code
  }
})
