import styles from './App.module.css';
import {useEffect, useState} from "react";

function App() {
    const [flag, setFlag] = useState(false);

    const onClick = () => setFlag((prev) => !prev);

    function Hello() {
        useEffect(() => {
            console.log('created :)');

            return () => console.log('destroyed :(');
        }, []);

        return <h1>Hello</h1>
    }

    return (
        <div className={styles.title}>
            {flag ? <Hello/> : null}
            <button onClick={onClick}>{flag ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;
