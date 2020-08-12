import React from 'react';

import './News.css';
import Pagination from '../Pagination/Pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const News = ({ news, totalNews, page, pageSize, pageChange }) => {

    const convertStamp = (ts) => {
        let date =  new Date(Date.parse(ts));
        return date.toUTCString();
    }

    return (
        <div className="content-wrapper">
            {
                news.map((article, index) => 
                    <div key={index} className="news-container">
                        <div className="news-avatar">
                            <img src={article.urlToImage} alt="content avatar" />
                        </div>
                        <div className="news-content">
                            <div className="">
                                <h1>{article.title}</h1>
                                <small>{article.author ? `- ${article.author}` : null}</small>
                                <p>{article.description}</p>
                            </div>
                            <div className="news-content_bottom">
                                <small>{ convertStamp(article.publishedAt)}</small>
                                <p><a className="" href={article.url} target="blank" >Visit <FontAwesomeIcon icon={faExternalLinkAlt} color="#9a092c" /></a></p>
                            </div>
                        </div>
                    </div>
                )
            }
            { totalNews > pageSize ? <Pagination page={page} pageCount={Math.ceil(totalNews / pageSize)} handlePage={pageChange} /> : null }
        </div>
    )
}

export default News;
