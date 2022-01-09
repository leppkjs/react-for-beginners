import styles from './App.module.css';
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState("");
    const inclease = () => setCounter((prev) => prev + 1);
    const changeValue = (e) => setSearch(() => e.target.value);

    useEffect(() => console.log('is only first'), []);
    useEffect(()=> {
        console.log('updated Search :: ', search);
    }, [search]);

    useEffect(()=> {
        console.log('updated counter :: ', counter);
    }, [counter]);

    return (
        <div className={styles.title}>
            <input
                type="text"
                value={search}
                onChange={changeValue}
                placeholder="search for here"
            >
            </input>
            <h1>{counter}</h1>
            <button onClick={inclease}>inclease</button>
        </div>
    );
}

export default App;
