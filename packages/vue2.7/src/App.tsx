import { defineComponent, ref, watch } from 'vue';
import { Todomvc, TdInput } from "tdesign";

const App = defineComponent({
  name: 'App',
  setup() {
    const userInput = ref('');

    const handleInput = (val: string) => {
      console.log(val);
    }

    watch(userInput, () => {
      console.log(userInput.value);
    })

    return () => (
      <div>
        <h1>Todomvc</h1>
        <Todomvc />
        <br />
        {/* <h1>Input</h1> */}
        {/* <TdInput value={userInput.value} onInput={handleInput}  placeholder='我是张跑跑'/> */}
      </div>
    )
  }
})
export default App