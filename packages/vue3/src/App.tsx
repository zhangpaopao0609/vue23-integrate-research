import { defineComponent } from 'vue';
import { Todomvc } from "tdesign";

const App = defineComponent({
  setup() {
    return () => <Todomvc />
  }
})
export default App