import html from '../core.js'

function Header () {
    return html`
        <header class="header">
            <h1>Tu Đu</h1>
            <input class="new-todo" placeholder="M cần làm j hôm nay ???" autofocus
                onkeyup="(event.keyCode) === 13 && dispatch('add', this.value.trim())"
            >
            
        </header>
    `
}

export default Header