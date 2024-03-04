import html from '../core.js'
import Header from '../Components/Header.js'
import TodoList from '../Components/TodoList.js'
import Footer from '../Components/Footer.js'
import { connect } from '../store.js'

function App({todos}) {
    return html `
        <section class="todoapp">
           ${Header()}
           ${todos.length > 0 && TodoList()}
           ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)

// In ra tất cả mọi thứ.
// Tạo ra các component để bỏ vào hàm html => chuyển vào root 