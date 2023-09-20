import { computed, defineComponent, h, ref } from 'vue';
import { Button } from "tdesign/node_modules/main";

export default defineComponent({
  setup() {
    const count = ref(1);

    const handleClick = () => {
      count.value++
    }

    return () => (
      <div>
        <Button>跑跑</Button>
      </div>
    )
  }
});
