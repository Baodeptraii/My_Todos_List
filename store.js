import { createStore } from './core.js';
import reducer from './reducer.js';
import withLogger from './logger.js';

const {attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch 

export {
    attach,
    connect
}

// Chạy hàm creatStore với đối số là Reducer để trả về attach, connect, dispatch (Có thể gọi là cầu nối ?!)