export default function logger(reducer) {
    return (prevState, action , args) => {

        console.group(action);
        console.log('prevState : ', prevState);
        console.log('action arguments : ', args);
        const nextState = reducer(prevState, action, args);
        console.log('nextState : ', nextState);
        console.groupEnd();

        return nextState;
    }
}

// Trả về trạng thái của dữ liệu trước và sau thay đổi 