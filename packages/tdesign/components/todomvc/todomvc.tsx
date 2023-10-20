// @ts-nocheck
import { defineComponent, ref, getCurrentInstance } from 'vue';
import "./index.less";
import { ListItem } from "./type.ts";
import TodoList from "./todolist";

const App = defineComponent({
  props: {
    desc: String,
  },
  components: { TodoList },
  setup(props, { slots }) {
    const userInput = ref('');
    const lists = ref<ListItem[]>([]);

    const inputKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        lists.value.push({
          key: Date.now(),
          status: 0,
          content: userInput.value,
          uuid: Date.now(),
        });
        userInput.value = '';
      }
    };
    
    return () => (
      <div class='wrap'>
        <h1>{props.desc}</h1>
        <div class='todomvc'>
          <h2>TodoMVC</h2>
          <div class='todomvc__input'>
            <span>代办事项：</span>
            <input 
              type="text" 
              value={userInput.value} 
              onInput={(e) => userInput.value = e.target.value} 
              onKeydown={inputKeydown} 
              placeholder='请填写事项'
            />
          </div>
          
          <TodoList lists={lists.value} />
        </div>
      </div>)
  },
});

export default App