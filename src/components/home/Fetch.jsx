import axios from 'axios';
import './fetch.css'
import React, { useEffect, useState } from 'react'
import Home from './Home';

export default function Fetch() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.tvmaze.com/search/shows?q=all")
            .then((data) => {
                setShows(data.data);
            })
    }, []);
    return (
        <div className='grid'>
            {shows.map((card) => (
                <Home key={card.show?.id} show={card} />
            ))}
        </div>
    )
}
