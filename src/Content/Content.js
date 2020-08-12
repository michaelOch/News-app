import React, { useState, useEffect } from 'react';
import './Content.css';

import Header from '../Header/Header';
import News from '../News/News';
import Sidenav from '../Sidenav/Sidenav';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

function Content() {

    const apiKey = '90a7a974951e43e59199ab3b2621cea0';
    const pageSize = 10;
    const [news, setNews] = useState({});
    const [totalNews, setTotalNews] = useState();
    const [isLoadedData, setIsLoadedData] = useState(false);

    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('general');
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        console.log(page);
        setIsLoadedData(false);
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data);
                setTotalNews(data.totalResults);
                setIsLoadedData(true);
            });
    }, [country,category, page]);

    const handleSearch =  () => {
        setIsLoadedData(false);
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&q=${search}&pageSize=${pageSize}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setIsLoadedData(true);
            });
    }

    return (
        <div className="">
            <Header country={setCountry} />
            <div className="container">
                <div className="content-layout">
                    <Sidenav isLoadedData={isLoadedData} news={news.articles} category={setCategory} search={setSearch} searchFn={handleSearch} />
                    { isLoadedData ? 
                        <News news={news.articles} totalNews={totalNews} pageSize={pageSize} page={page} pageChange={setPage} /> 
                        : <Loader />
                    }
                </div>
            </div>
        </div>
    )
}

export default Content;
