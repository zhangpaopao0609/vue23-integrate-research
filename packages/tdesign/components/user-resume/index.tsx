import { defineComponent, computed, PropType, ref, watch, toRefs, useVModel, getCurrentInstance } from 'common';

import props from "./props.ts";
import BasicInfo from "./components/basic-info";
import EducationExperience from "./components/education-experience";
import OtherInfo from "./components/other-info";

import "./styles/index.less";

const UserResume = defineComponent({
  name: 'UserResume',
  props,
  setup(props, { slots, emit }) {
    const { value: valueProps, modelValue } = toRefs(props)

    const basicInfo = computed(() => ({
      name: props.name,
      age: props.age,
      gender: props.gender,
    }))
    
    const [value, setValue] = useVModel(valueProps, modelValue, null, props.onInput, 'value', 'input');

    const handleInput = (e: InputEvent) => {
      const target = e.target;
      setValue(target.value)
    }

    console.log(getCurrentInstance());
    
    return () => (
      <div class="resume">
        <h2>求职意向</h2>
        <input
          value={value.value}
          onInput={handleInput}
          class="position"
          type="text"
          placeholder='请输入求职意向'
        />
        <p>{ value.value }</p>
        <BasicInfo {...basicInfo.value} />
        <EducationExperience educationList={props.educationList} />
        <OtherInfo v-slots={{paopao: slots.paopao}} onPaopao={props.onPaopao}/>
      </div>
    )
  },
});

export default UserResume;