import { defineComponent, PropType } from 'common';
import { EducationList } from "./type";

const EducationExperience = defineComponent({
  name: 'EducationExperience',
  props: {
    educationList: {
      type: Array as PropType<EducationList[]>,
      default: () => []
    },
  },
  setup(props) {
    return () => (
      <div class="education-experienct">
        <h2>教育经历</h2>
        {
          props.educationList.map((item) => (
            <div class='item'>
              <span>时间：{item.time}</span>
              <span>学校：{item.school}</span>
            </div>
          ))
        }
      </div>
    )
  },
});

export default EducationExperience