import * as Vue from "vue";

function getCurrentInstance() {
  const innerInstance = Vue.getCurrentInstance()?.proxy;
  const instance = {
    ...innerInstance,
    props: innerInstance?._props
  }

  return instance;
}

export * from 'vue'

export {
  getCurrentInstance,
}