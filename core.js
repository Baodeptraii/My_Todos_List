// Thư viện Redux
export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()), [first]
    ).filter(x => x && x !== true || x === 0).join('');
}

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args));

        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}

// Xuất ra 2 hàm "html" và "createStore"
// Hàm html : Thực hiện các thay đổi trong file index.html bằng js
// Hàm creatStore : Xuất ra 3 object gồm "attach","connect","dispatch"
// attach : tiến hành render() cho 2 tham số nhận vào
// connect : thực hiện hàm component khi data bị thay đổi 
// dispatch : update state(trạng thái) khi có hành động đc thực hiện ( data thay đổi)
// => Thực hiện render() in ra UI

