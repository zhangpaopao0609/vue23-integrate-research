import Vue from 'vue';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
    interface Element extends Vue {}
    interface ElementClass extends Vue {}
    interface ElementAttributesProperty {
      $props: {};
    }
    interface IntrinsicAttributes {
      key?: string | number;
    }
  }
}