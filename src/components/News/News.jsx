import React from "react";
import NewsItem from "./NewsItem/NewsItem";
import style from './News.module.css';
import { addNewsCreator, updateNewNewsDescriptionCreator, updateNewNewsTitleCreator } from "../../redux/newsReducer";

const News = (props) => {
    let newNewsTitle = props.newsPage.newNewsTitle;
    let newNewsDescription = props.newsPage.newNewsDescription;
    let newsElements= props.newsPage.news
        .map((newsItem) => <NewsItem id={newsItem.id} 
                                title={newsItem.title}
                                description={newsItem.description}/>);
    
    let addNews = () => {
        let title = newNewsTitle;
        let description = newNewsDescription;

        if(title !== '' && description !== ''){
            let action = addNewsCreator();
            props.dispatch(action);
        }
    }

    let onTitleChange = (e) =>{
        let text = e.target.value;
        let action = updateNewNewsTitleCreator(text);
        props.dispatch(action);
    }      
    
    let onDescriptionChange = (e) =>{
        let text = e.target.value;
        let action = updateNewNewsDescriptionCreator(text);
        props.dispatch(action);
    }                        


    return(
        <div className={style.newsBlock}>
            <div className={style.newsItems}>
               {newsElements}
            </div>

            <div>
                Add News
                <form className={style.addNewsBlock} action="">
                    <div className={style.newsComponent}>
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="Input title" value={newNewsTitle} onChange={onTitleChange}/>
                    </div>
                    <div className={style.newsComponent}>
                        <label for="description">Description</label>
                        <textarea id="description" placeholder="Input text" value={newNewsDescription} onChange={onDescriptionChange}></textarea>
                    </div>
                    <div className={style.newsComponent}>
                        <input type="button" value="Add news" onClick={addNews}/>
                    </div>  
                </form>
            </div>
        </div>
    )
}


export default News;