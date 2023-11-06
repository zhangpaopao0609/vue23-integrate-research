import { defineComponent } from 'common';

const OtherInfo = defineComponent({
  name: 'OtherInfo',
  setup(props, { slots, emit }) {
    return () => (
      <div class="other-info" onClick={() => emit('paopao')}>
        <h2>其它自定义</h2>
        { slots.paopao?.() }
      </div>
    )
  },
});

export default OtherInfo