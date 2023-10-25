import { defineComponent, computed, PropType } from 'vue';
import BasicInfo from "./basic-info";
import EducationExperience from "./education-experience";
import OtherInfo from "./other-info";

import { EducationList } from "./type";

const TodoList = defineComponent({
  name: 'TodoList',
  props: {
    // 基本信息
    name: String,
    age: Number,
    gender: Number,
    // 教育经历
    educationList: Array as PropType<EducationList[]>,
    work: String,
    onPaopao: Function,
  },
  setup(props, { slots, emit }) {
    const basicInfo = computed(() => ({
      name: props.name,
      age: props.age,
      gender: props.gender,
    }))


    return () => (
      <div class="resume">
        <BasicInfo props={basicInfo.value} />
        <EducationExperience educationList={props.educationList} />
        <OtherInfo v-slots={{paopao: slots.paopao}} onPaopao={props.onPaopao}/>
      </div>
    )
  },
});

export default TodoList