import html from '../core.js'
import TodoItem from '../Components/TodoItem.js'
import { connect } from '../store.js'


function TodoList ({todos, filters, filter, editIndex}) {
    
    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox"
                onchange="dispatch('toogleAll', this.checked)"
                ${todos.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            
            <ul class="todo-list">
                ${todos.filter(filters[filter]).map( (todo, index) => TodoItem({ todo, index , editIndex })) }
            </ul>
    </section>
    ` 
}

export default connect()(TodoList)
