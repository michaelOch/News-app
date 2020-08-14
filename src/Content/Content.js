import React, { useState, useEffect } from 'react';
import './Content.css';

import Header from '../Header/Header';
import News from '../News/News';
import Sidenav from '../Sidenav/Sidenav';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

function Content() {

    const apiKey = '90a7a974951e43e59199ab3b2621cea0';
    const pageSize = 10;
    const [news, setNews] = useState({});
    const [totalNews, setTotalNews] = useState();
    const [isLoadedData, setIsLoadedData] = useState(false);

    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('general');
    const [page, setPage] = useState(1);
    const [source, setSource] = useState('');
    const [search, setSearch] = useState('');

    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        console.log(page);
        setIsLoadedData(false);
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}${search ? '&q=' + search + '&' : '&'}pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNews(data);
                setTotalNews(data.totalResults);
                setIsLoadedData(true);
            });
    }, [country,category, page, search]);

    const openHandler = () => {
        if(!sidebarOpen) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }

    const closeHandler = () => {
        setSidebarOpen(false);
    }

    let sidebarClass, overlayClass;
    if(sidebarOpen) {
        sidebarClass = 'sidenav-container sidenav-container-show';
        overlayClass = 'sidenav-overlay';
    } else {
        sidebarClass = 'sidenav-container';
        overlayClass = '';
    }

    return (
        <div className="">
            <Header country={setCountry} toggleFunction={openHandler} />
            <div className="container">
                <div className="content-layout">
                    <Sidenav sidebarClass={sidebarClass} overlayClass={overlayClass} toggleFunction={closeHandler} isLoadedData={isLoadedData} news={news.articles} category={setCategory} search={search} searchFn={setSearch} source={setSource} />
                    { isLoadedData ? 
                        <News news={news.articles} totalNews={totalNews} pageSize={pageSize} page={page} pageChange={setPage} /> 
                        : <Loader />
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Content;
