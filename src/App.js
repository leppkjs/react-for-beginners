import styles from './App.module.css';
import {useEffect, useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    function onChange(event) {
        setToDo(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        if (toDo === "") {
            return;
        }

        setToDos((current) => [toDo, ...current]);
        setToDo("");
    }

    return (
        <div className={styles.title}>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={toDo}
                    onChange={onChange}
                ></input>
                <button>Send</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
