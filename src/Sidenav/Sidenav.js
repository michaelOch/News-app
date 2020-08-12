import React from 'react';

import './Sidenav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Sidenav({ isLoadedData, news, category, search, searchFn }) {
    return (
        <div className="sidenav-container">
            <div className="form-group">
                <input type="text" className="form-input" onChange={(e) => search(e.target.value)} placeholder="search..." />
                <div className="form-append" onClick={() => searchFn()}>
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
                    {/* <li className="list-item">Sports</li>
                    <li className="list-item">Entertainment</li>
                    <li className="list-item">Music</li>
                    <li className="list-item">Football</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Sidenav;
