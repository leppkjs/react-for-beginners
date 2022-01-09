import styles from './App.module.css';
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(response => response.json())
            .then((coins) => {
                setCoins(coins);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.title}>
            <h1>The Coins ({coins.length})</h1>
            {loading ? <strong>is loading...</strong> : null}
            <ul>
                {coins.map((coin, index) => (
                    <li key={index}>{coin.name} ({coin.symbol}, ${coin.quotes.USD.price} USD)</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
