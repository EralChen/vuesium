import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const a = ref('hello')
    const uA = () => {
      a.value = 'world'
    }
      
    return () => (
      <div>
        <button onClick={ uA }>setValue</button>
        <span>{a.value}</span>
      </div>
    )
  },
})
