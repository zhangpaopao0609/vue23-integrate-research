import { defineComponent, ref, watch } from 'vue';
import { Todomvc, TdInput } from "tdesign";

const App = defineComponent({
  name: 'App',
  setup() {
    const userInput = ref('')

    watch(userInput, () => {
      console.log(userInput.value);
    })

    return () => (
      <div>
        <h1>Todomvc</h1>
        <Todomvc />
        <br />
        <h1>Input</h1>
        <TdInput v-model={userInput.value} placeholder='我是张跑跑'/>
      </div>
    )
  }
})
export default App