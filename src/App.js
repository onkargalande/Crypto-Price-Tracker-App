import React, { useState, useEffect } from 'react';
import CoinList from './CoinList';
import SearchBar from './SearchBar';
import Footer from './Footer';
import './styles.css';

const App = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchCoins = async () => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            const data = await response.json();
            setCoins(data);
        };

        fetchCoins();
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">
            <div className="app-header">
                <h1>Crypto Price Tracker</h1>
                <SearchBar onChange={handleChange} />
            </div>
            <CoinList coins={filteredCoins} />
            <Footer />
        </div>
    );
};

export default App;
