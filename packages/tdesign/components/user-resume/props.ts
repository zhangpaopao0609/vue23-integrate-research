import { PropType } from 'common';
import { EducationList } from "./type";

export default {
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
  value: String, // 3 v-model:aaa aaaa update:aaa // 2 v-model
  // v-model:
  modelValue: String, // 3 v-model 
}