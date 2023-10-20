import { defineComponent, PropType } from 'vue';
import { ListItem } from "./type.ts";


const TodoList = defineComponent({
  name: 'TodoList',
  props: {
    lists: {
      type: Array as PropType<ListItem[]>,
      default: () => [],
    }
  },
  setup(props) {
    console.log(props);
    
    return () => (
      <div class='list'>
        {
          props.lists.map(l => (
            <div
              class='list__item'
              key={l.uuid}
            >
              { l.content }
            </div>
          ))
        }
      </div>
    )
  },
});

export default TodoList