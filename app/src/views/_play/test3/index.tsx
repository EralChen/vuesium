import { computed, defineComponent, PropType, toRefs } from 'vue'

 interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Tab = 'all' | 'active' | 'completed'

function createTodos () {
  const todos = []
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: 'Todo ' + (i + 1),
      completed: Math.random() > 0.5,
    })
  }
  return todos
}

function filterTodos (todos: Todo[], tab: Tab) {

  const startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter(todo => {
    if (tab === 'all') {
      return true
    } else if (tab === 'active') {
      return !todo.completed
    } else if (tab === 'completed') {
      return todo.completed
    }
  })
}


export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => createTodos(),
    },
    theme: {
      type: String,
      default: 'light',
    },
    tab: {
      type: String as PropType<Tab>,
      default: 'all',
    },
  },
  setup (props) {
    const { tab, theme, todos } = toRefs(props)
    const visibleTodos = computed(() => {
      return filterTodos(todos.value, tab.value)
    }) 

    return () => {
      return <div class={theme.value}>
        <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
        <ul>
          {visibleTodos.value.map(todo => (
            <li key={todo.id}>
              {todo.completed ?
                <s>{todo.text}</s> :
                todo.text
              }
            </li>
          ))}
        </ul>
      </div>
    }

  },
})
