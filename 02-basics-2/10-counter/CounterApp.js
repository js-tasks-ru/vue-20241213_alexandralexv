import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0)

    function handleViewChange() {}

    function increaseNumber() {
      if (count.value < 5) {
        count.value++
      }
    }
    function decreaseNumber() {
      if (count.value > 0) {
        count.value--
      }
    }
    return {
      count,
      handleViewChange,
      increaseNumber,
      decreaseNumber,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count === 0"
        @click="decreaseNumber"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count === 5"
        @click="increaseNumber"
      >➕</button>
    </div>
  `,
})
