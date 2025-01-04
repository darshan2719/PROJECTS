import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
            .then(response => response.json())
            .then(data => setNews(data.items));
    }, []);

    return (
        <div className="container">
            <h1>TechCrunch News</h1>
            <ul>
                {news.map(item => (
                    <li key={item.guid}>
                        <h2>{item.title}</h2>
                        <p>{item.pubDate}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;
