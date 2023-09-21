import { defineComponent, computed, toRefs } from 'vue';
import isUndefined from 'lodash/isUndefined';
import "./input.css";
import props from "./props.ts";

import useVModel from "../../hooks/useVModel.ts";

function getValidAttrs(obj: Record<string, unknown>): Record<string, unknown> {
  const newObj: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    if (!isUndefined(obj[key])) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

const App = defineComponent({
  props,
  setup(props) {
    const inputAttrs = computed(() =>
      getValidAttrs({
        autofocus: props.autofocus,
        placeholder: props.placeholder,
        autocomplete: props.autocomplete
      }),
    );
    console.log(props);
    
    const { value, modelValue } = toRefs(props);
    const [innerValue, setInnerValue] = useVModel(value, modelValue, props.defaultValue, props.onChange as any);
    const handleInput = (e:InputEvent) => {
      const target = e.currentTarget as any;
      setInnerValue(target.value)
    }
    return () => (
      <div class="input">
        <input
          class="input__inner"
          {...inputAttrs.value}
          value={innerValue.value}
          onInput={(e: Event) => handleInput(e as InputEvent)}
        />
      </div>
    )
  }
});

export default App