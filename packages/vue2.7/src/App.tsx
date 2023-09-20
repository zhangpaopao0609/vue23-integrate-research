import { defineComponent, ref } from 'vue';

interface List {
  key: number,
  status: 0 | 1,
  content: string,
}

const App = defineComponent({
  setup() {
    const userInput = ref('');
    const lists = ref<List[]>([]);

    const inputKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        lists.value.push({
          key: Date.now(),
          status: 0,
          content: userInput.value
        });
        userInput.value = '';
      }
    };

    return () => (
      <div>
        <input type="text" value={userInput.value} onInput={(e) => userInput.value = e.target.value} onKeydown={inputKeydown} />
        {
          lists.value.map((list) => (
            <div key={list.key}>
              {list.content}
            </div>
          ))
        }
      </div>)
  },
});

export default App