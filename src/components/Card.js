import React, { useState, useEffect } from 'react'
import './Featured.css'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import axios from 'axios';

const Card = () => {

    const [data, setData] = useState(null);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => { // con axios prendo le info dall'url inserisco e le in response
            setData(response.data) // setto i dati prendendoli da response
        }).catch((error) => {
            console.error(error)
        })
    }, []) // ,[] serve per fermare la chiamata

    //console.log(data)
    if (!data) return null
    return (
        <div className="right">
            {data.map(crypto => ( // prendo l'array dall'esterno lo filtro con .map 
                <div key={crypto.id} className="card">
                    <div className="top">
                        <img src={crypto.image} alt='' />
                    </div>
                    <div>
                        <h5>{crypto.name}</h5>
                        <p>€{crypto.current_price.toLocaleString()}</p>
                    </div>
                    {crypto.price_change_percentage_24h < 0 ? (
                        <span className="red">
                            <FiArrowDown />
                            {crypto.price_change_percentage_24h.toFixed(2)}%
                        </span>

                    ) : (
                        <span className="green">
                            <FiArrowUpRight />
                            {crypto.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Card