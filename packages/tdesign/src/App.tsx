import { defineComponent, ref } from 'vue';

const App = defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={inc}>{count.value}</div>
    );
  },
});

export default App