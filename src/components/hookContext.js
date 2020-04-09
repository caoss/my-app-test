import React, { useContext } from "react";
// import ReactDOM from "react-dom";
import "./styles.css";


//1.第一步就是使用 React Context API，在组件外部建立一个 Context。
const AppContext = React.createContext({});


//下面代码中，useContext()钩子函数用来引入 Context 对象，从中获取username属性。
const Navbar = () => {
    const { username } = useContext(AppContext);
    return (
        <div className="navbar">
            <p>{username}</p>
        </div>
    );
};

const Messages = () => {
    const { username } = useContext(AppContext);
    return (
        <div className="messages">
            <p>1 message for {username}</p>
        </div>
    );
};

function App() {
    return (
        <AppContext.Provider value={{
            //上面代码中，AppContext.Provider提供了一个 Context 对象，这个对象可以被子组件共享
            "username": "superawesome"
        }}>
            <div className="App">
                <Navbar />
                <Messages />
            </div>
        </AppContext.Provider>
    );
}
export default App;