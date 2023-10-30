import { Ref, ref, getCurrentInstance } from 'vue';
import kebabCase from 'lodash/kebabCase';

export type ChangeHandler<T, P extends any[]> = (value: T, ...args: P) => void;

export interface UseVModelParams<T> {
  value: Ref<T>;
  eventName?: string;
  propName?: string;
}

export function useVModel<T, P extends any[]>(
  // v-model
  value: Ref<T>,
  // v-model
  modelValue: Ref<T>,
  // 默认值
  defaultValue: T,
  onChange: ChangeHandler<T, P>,
  // v-model
  propName = 'value',
  // vue2 eventName
  eventName = 'input',
  // 除了 value + onChange，还支持其他同含义字段和事件
  alias: UseVModelParams<T>[] = [],
) {
  const instance = getCurrentInstance()?.proxy || {};
  const { _events, $vnode } = instance;
  const internalValue = ref<T>();
  internalValue.value = defaultValue;

  const { propsData } = $vnode?.componentOptions || {}
  const isControlled = Object.prototype.hasOwnProperty.call(propsData, propName)
    || Object.prototype.hasOwnProperty.call(propsData, kebabCase(propName));
  console.log(propsData);
  // 受控模式
  if (isControlled) {
    return [
      value,
      (newValue, ...args) => {
        // input 事件为 v-model 语法糖
        _events.input?.forEach(fn => fn(newValue))
        onChange?.(newValue, ...args);
        if (eventName && eventName !== 'input') {
          _events[eventName]?.forEach(fn => fn(newValue))
        }
      },
    ];
  }
}

export default useVModel;
