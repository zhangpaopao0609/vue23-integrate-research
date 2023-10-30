import * as Vue from "vue";
import useVModel from "./hooks/useVModel";

function getCurrentInstance() {
  const innerInstance = Vue.getCurrentInstance()?.proxy;
  const instance = {
    ...innerInstance,
    props: innerInstance?._props
  }

  return instance;
}

export {
  getCurrentInstance,
  useVModel
}