import { defineComponent, getCurrentInstance } from '@vue/composition-api';
import { Todomvc } from "tdesign";

const App = defineComponent({
  setup() {
    const instance = getCurrentInstance();

    console.log(instance, 'vue2.6');

    return () => <Todomvc title="vue2.6" footer="vue2.6"/>
  }
})
export default App