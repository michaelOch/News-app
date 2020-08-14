import React from 'react';

import bbc from './img/bbc.gif';
import cnbc from './img/cnbc.png';
import cnn from './img/cnn.png';
import daily from './img/daily.png';
import echo from './img/echo.png';
import espn from './img/espn.png';
import guardian from './img/guardian.jpg';
import sky from './img/sky.png';

import './Sidenav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

function Sidenav({ sidebarClass, overlayClass, toggleFunction, isLoadedData, news, category, search, searchFn, source }) {
    return (
        <div className="">
            <div className={overlayClass}></div>
            <div className={sidebarClass}>
                <div className="close" onClick={toggleFunction ? toggleFunction : null}>
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#9a092c', fontSize:"20px" }} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-input" onChange={(e) => searchFn(e.target.value)} value={search} placeholder="search..." />
                    <div className="form-append">
                        <FontAwesomeIcon icon={faSearch} color="#ffffff" />
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-item" onClick={(e) => category('general')}>General</li>
                    <li className="list-item" onClick={(e) => category('business')}>Business</li>
                    <li className="list-item" onClick={(e) => category('science')}>Science</li>
                    <li className="list-item" onClick={(e) => category('entertainment')}>Entertainment</li>
                    <li className="list-item" onClick={(e) => category('sports')}>Sports</li>
                    <li className="list-item" onClick={(e) => category('health')}>Health</li>
                    <li className="list-item" onClick={(e) => category('technology')}>Technology</li>
                </ul>
                <div className="sources">
                    <h4 className="">Sources</h4>
                    <ul className="list-group">
                        <li className="list-item">
                            <img onClick={() => source('bbc-news')} src={bbc} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('cnbc')} src={cnbc} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('cnn')} src={cnn} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('daily-beast')} src={daily} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('bbc-news')} src={echo} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('espn')} src={espn} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('bbc-news')} src={guardian} alt="source" />
                        </li>
                        <li className="list-item">
                            <img onClick={() => source('bbc-news')} src={sky} alt="source" />
                        </li>
                    </ul>
                </div>
                <div className="top-headline">
                    <h4 className="">Top Headlines</h4>
                    <ul className="list-group">
                        {
                            isLoadedData ? 
                                news.map((article, index) => 
                                    <li key={index} className="list-item"><a className="" href={article.url}>{article.title}</a></li>    
                                )
                            : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;
