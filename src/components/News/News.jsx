import React from "react";
import NewsItem from "./NewsItem/NewsItem";
import style from './News.module.css';

const News = (props) => {
    let newsElements= props.newsPage.news
        .map((newsItem) => <NewsItem id={newsItem.id} 
                                title={newsItem.title}
                                description={newsItem.description}/>);

    return(
        <div className={style.newsBlock}>
            <div className={style.newsItems}>
               {newsElements}
            </div>
        </div>
    )
}


export default News;