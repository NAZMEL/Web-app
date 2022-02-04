import React from "react";
import NewsItem from "./NewsItem/NewsItem";
import style from './News.module.css';
import { addNewsCreator, clearNewsFieldsCreator, updateNewNewsDescriptionCreator, updateNewNewsTitleCreator } from "../../redux/newsReducer";

const News = (props) => {
    let newNewsTitle = props.newsPage.newNewsTitle;
    let newNewsDescription = props.newsPage.newNewsDescription;
    let newsElements= props.newsPage.news
        .map((newsItem) => <NewsItem id={newsItem.id} 
                                title={newsItem.title}
                                description={newsItem.description}/>);
    let titleField = React.createRef();
    let textareaField = React.createRef();

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
    
    let onClearFields = () =>{
        if(titleField !== '' || textareaField !== ''){
            let action = clearNewsFieldsCreator();
            props.dispatch(action);
        }
    }

    return(
        <div className={style.newsBlock}>
            <div className={style.newsItems}>
               {newsElements}
            </div>

            <div> 
                <form className={style.addNewsBlock} action="">
                    <div className={style.newsBlockTitle}>
                        Add News
                    </div>
                    <div className={style.newsComponent}>
                        <label for="title">Title</label>
                        <input id="title" type="text" placeholder="Input title" ref={titleField} value={newNewsTitle} onChange={onTitleChange}/>
                    </div>
                    <div className={style.newsComponent}>
                        <label for="description">Description</label>
                        <textarea className={style.newsComponentTextarea} id="description" placeholder="Input text" ref={textareaField} value={newNewsDescription} onChange={onDescriptionChange}></textarea>
                    </div>
                    <div className={style.newsComponent + ' ' + style.newsComponentButtonsBlock}>
                        <input type="button" value="Add news" onClick={addNews}/>
                        <input type="button" value="Clear fields" onClick={onClearFields}/>
                    </div>  
                </form>
            </div>
        </div>
    )
}


export default News;