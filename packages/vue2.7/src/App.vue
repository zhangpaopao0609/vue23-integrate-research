<script lang="ts">
import { defineComponent, ref, watch, reactive } from 'vue';
import { UserResume } from "tdesign";

export default defineComponent({
  name: 'App',
  components: { UserResume },
  setup() {
    const userInfo = reactive({
      name: "Vue3",
      age: 2,
      gender: 1,
      educationList: [
        { time: '1998-1997', school: '国防大学' },
        { time: '1999-2033', school: '农夫大学' },
      ],
    })

    setTimeout(() => {
      userInfo.age += 1;
    }, 2000);

    const handlePaopao = () => {
      userInfo.age += 1;
    }

    const position = ref('');
    
    watch(position, () => {
      console.log(position.value);
    })

    return {
      userInfo,
      handlePaopao,
      position,
    }
  }
})
</script>

<template>
  <div>
    <UserResume
      v-model="position"
      v-bind="userInfo" 
      :onPaopao="handlePaopao"
    >
      <template #paopao>
        <span>我是 vue2.7 的具名插槽</span>
      </template>
    </UserResume>

  </div>
</template>