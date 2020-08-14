import React, { useState, useEffect } from 'react';
import './Content.css';

import Header from '../../components/Header/Header';
import News from '../../components/News/News';
import Sidenav from '../../components/Sidenav/Sidenav';
import Loader from '../../components/Loader/Loader';
import Errorpage from '../../components/Errorpage/Errorpage';
import Footer from '../../components/Footer/Footer';

function Content() {

    const apiKey = '90a7a974951e43e59199ab3b2621cea0';
    const pageSize = 10;
    const [news, setNews] = useState({});
    const [totalNews, setTotalNews] = useState();
    const [isLoadedData, setIsLoadedData] = useState(false);
    const [error, setError] = useState(false);

    const [country, setCountry] = useState('us');
    const [category, setCategory] = useState('general');
    const [page, setPage] = useState(1);
    const [source, setSource] = useState('');
    const [search, setSearch] = useState('');

    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setError(false);
        setIsLoadedData(false);
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}${search ? '&q=' + search + '&' : '&'}pageSize=${pageSize}&page=${page}&apiKey=${apiKey}`)
            .then(res => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                } else {
                    setError(true);
                    throw Error(res.statusText);
                }
            })
            .then(data => {
                if(data.status === "ok") {
                    setNews(data);
                    setTotalNews(data.totalResults);
                    setIsLoadedData(true);
                } else {
                    setError(true);
                    console.error("There's been an error fetching data from the server!")
                }
            })
            .catch(error => {
                setError(true);
                console.error('Error:', error);
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
            <Header 
                country={setCountry} 
                toggleFunction={openHandler} 
            />
            <div className="container">
                <div className="content-layout">
                    <Sidenav 
                        sidebarClass={sidebarClass} 
                        overlayClass={overlayClass} 
                        toggleFunction={closeHandler} 
                        isLoadedData={isLoadedData} 
                        news={news.articles} 
                        category={setCategory} 
                        search={search} 
                        searchFn={setSearch} 
                        source={setSource} 
                    />
                    { isLoadedData ? 
                        <News 
                            news={news.articles} 
                            totalNews={totalNews} 
                            pageSize={pageSize} 
                            page={page} 
                            pageChange={setPage} 
                        /> 
                        : error ? <Errorpage /> : <Loader />
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Content;
