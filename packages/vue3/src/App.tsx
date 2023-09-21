import { defineComponent, ref, watch } from 'vue';
import { Todomvc, TdInput, TdButton } from "tdesign";

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
        <h1>TdButton</h1>
        <div>
          <TdButton theme="primary">填充按钮</TdButton>
          <TdButton tag="div">div</TdButton>
          <TdButton theme="primary">
            {{
              icon: () => <div>我是一个 icon </div>
            }}
          </TdButton>
        </div>
        <h1>Input</h1>
        <TdInput v-model={userInput.value} placeholder='我是张跑跑' />
      </div>
    )
  }
})
export default App