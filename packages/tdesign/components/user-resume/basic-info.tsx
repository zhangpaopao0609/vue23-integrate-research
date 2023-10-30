import { defineComponent } from 'common';

const BasicInfo = defineComponent({
  name: 'BasicInfo',
  props: {
    name: String,
    age: Number,
    gender: Number,
  },
  setup(props) {
    return () => (
      <div class="basic-info">
        <h2>基本信息</h2>
        <div>姓名： { props.name }</div>
        <div>年龄： { props.age }</div>
        <div>性别： { props.gender }</div>
      </div>
    )
  },
});

export default BasicInfo