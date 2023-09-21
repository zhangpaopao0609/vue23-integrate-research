export default {
  /** 是否开启自动填充功能，HTML5 原生属性，[点击查看详情](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) */
  autocomplete: {
    type: String,
    default: undefined,
  },
  placeholder: String,
  /** 自动聚焦 */
  autofocus: Boolean,
  /** 是否可清空 */
  clearable: Boolean,
  /** 是否禁用输入框 */
  disabled: Boolean,
  /** 输入框的值 */
  value: {
    type: String, 
    default: undefined 
  },
  modelValue: {
    type: String, 
    default: undefined 
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: String, 
    default: '' 
  },
  /** 失去焦点时触发 */
  onBlur: Function, 
  /** 输入框值发生变化时触发。`trigger=initial` 表示传入的数据不符合预期，组件自动处理后触发 change 告知父组件。如：初始值长度超过 `maxlength` 限制 */
  onChange: Function, 
  /** 清空按钮点击时触发 */
  onClear: Function, 
  /** 回车键按下时触发 */
  onEnter: Function, 
  /** 获得焦点时触发 */
  onFocus: Function, 
  /** 键盘按下时触发 */
  onKeydown: Function, 
};
