import { defineComponent, computed, PropType, ref, watch, toRefs } from 'vue';
import { useVModel } from "common";

import BasicInfo from "./basic-info";
import EducationExperience from "./education-experience";
import OtherInfo from "./other-info";

import { EducationList } from "./type";

import "./index.less";

const UserResume = defineComponent({
  name: 'UserResume',
  props: {
    // 基本信息
    name: String,
    age: Number,
    gender: Number,
    // 教育经历
    educationList: Array as PropType<EducationList[]>,
    work: String,
    onPaopao: Function,
    onInput: Function,
    // v-model
    value: String,
    modelValue: String,
    
  },
  setup(props, { slots, emit }) {
    const { value: valueProps, modelValue } = toRefs(props)

    const basicInfo = computed(() => ({
      name: props.name,
      age: props.age,
      gender: props.gender,
    }))

    const handleInput = (e: InputEvent) => {
      const target = e.target;
      setValue(target.value)
    }
    
    const [value, setValue] = useVModel(valueProps, modelValue, null ,props.onInput, 'value', 'input');
    
    watch(() => props.value, () => {
      console.log(props.value);
    })

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

export default UserResume