import html from '../core.js'
import {connect} from '../store.js'

function Footer({todos, filters, filter}) {

    return html`
        <footer class="footer">
            <span class="todo-count">Còn <strong>
                ${todos.filter(filters.active).length}
            </strong> việc </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a class="${filter === type && 'selected' }" href="#" onclick="dispatch('switchFilter', '${type}')">
                         ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                        
                    </li>
                `)}
            </ul>
                ${todos.filter(filters.completed).length > 0 && html`
                     <button class="clear-completed" onclick="dispatch('Clear')">Xóa việc đã xong</button>
                `}
            
        </footer>
    `
}

export default connect()(Footer)