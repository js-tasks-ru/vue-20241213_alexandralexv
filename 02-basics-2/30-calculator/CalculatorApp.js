import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstNum = ref(0)
    const secondNum = ref(0)
    const operator = ref('sum')

    function calculation(a, b, op) {
      switch (op) {
        case 'sum':
          return a + b
        case 'subtract':
          return a - b
        case 'multiply':
          return a * b
        case 'divide':
          return b !== 0 ? a / b : 'Error'
      }
    }

    // const output = ref(0)
    // watch([firstNum, secondNum, operator], () => {
    //   output.value = calculation(firstNum.value, secondNum.value, operator.value)
    // })

    const output = computed(() => {
      return calculation(firstNum.value, secondNum.value, operator.value)
    })

    return {
      output,
      firstNum,
      secondNum,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstNum"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator" />➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator" />✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator" />➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondNum"/>

      <div>=</div>

      <output>{{output}}</output>
    </div>
  `,
})
