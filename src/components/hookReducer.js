import React, { useReducer } from "react";
import "./styles.css";
//Reducer 函数的形式是(state, action) => newState。

const myReducer = (state, action) => {
    switch (action.type) {
    case "countUp":
        return {
            state,
            "count": state.count + 1
        };
    default:
        return state;
    }
};

//下面是useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数
// 返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。

function App() {
    const [state, dispatch] = useReducer(myReducer, { "count": 0 });

    return (
        <div className="App">
            <button onClick={() => dispatch({ "type": "countUp" })}>
        +1
            </button>
            <p>Count: {state.count}</p>
        </div>
    );
}
export default App;