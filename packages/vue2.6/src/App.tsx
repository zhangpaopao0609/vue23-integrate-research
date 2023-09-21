import { defineComponent } from '@vue/composition-api';
import { Todomvc } from "tdesign";

const App = defineComponent({
  setup() {
    return () => <Todomvc />
  }
})
export default App