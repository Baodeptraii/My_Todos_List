// Reducer.js để tùy chỉnh data dựa trên các hành động => File thực hiện các hành động từ ng dùng => Trả về data.
import storage from './util/storage.js';

const init = {
    todos: storage.get()    ,
    filter: 'all',
    filters: {
        all:() => true,
        active: todo =>!todo.completed,
        completed: todo => todo.completed
    },
    editIndex : null,
}

const actions = {
    add({todos}, title) {
        if(title){
            todos.push({
                title,
                completed: false
            });
            storage.set(todos);
        }
    },
    toggle({todos}, index){
        const todo = todos[index];
        todo.completed =!todo.completed;
        storage.set(todos);

    },
    toogleAll({todos},completed) {
        todos.forEach(todo => todo.completed = completed);
        storage.set(todos);
    },
    destroy({todos},index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter;
    },
    Clear(state){
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
        
    },
    Editing(state, index) {
        state.editIndex = index;
    },
    endEditing(state, title){
        if(state.editIndex !== null) {
            if(title){
                state.todos[state.editIndex].title = title;
            } else {
                state.todos.splice(state.editIndex, 1);
            }
            state.editIndex = null;
            storage.set(state.todos);
        }
    }
}

export default function reducer(state = init, action, args){
    actions[action] && actions[action](state, ... args);
    return state;
}