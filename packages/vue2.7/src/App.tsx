import { defineComponent, reactive } from 'vue';
import { UserResume } from "tdesign";

const App = defineComponent({
  name: 'App',
  setup() {
    const userInfo = reactive({
      name: "Vue3",
      age: 2,
      gender: 1,
      educationList: [
        { time: '1998-1997', school: '国防大学' },
        { time: '1999-2033', school: '农夫大学' },
      ],
    })

    setTimeout(() => {
      userInfo.age += 1;
    }, 2000);

    const slots = { paopao: () => <span>我是 vue2.7 的具名插槽!</span> }

    const handlePaopao = () => {
      userInfo.age += 1;
    }

    return () => (
      <div>
        <UserResume {...userInfo} v-slots={slots} onPaopao={handlePaopao}/>
      </div>
    )
  }
})
export default App