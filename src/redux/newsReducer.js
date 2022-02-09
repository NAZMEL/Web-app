const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TITLE = 'UPDATE-NEW-NEWS-TITLE';
const UPDATE_NEW_NEWS_DESCRIPTION = 'UPDATE-NEW-NEWS-DESCRIPTION';
const CLEAR_NEWS_FIELDS = 'CLEAR-NEWS-FIELDS';

let initialState = {
    news:[
        {id: 1, title: 'The first news', description: 'Here will be description'},
        {id: 2, title: 'The second news', description: 'Here will be description'},
        {id: 3, title: 'The third news', description: 'Here will be description'}
      ],
      newNewsTitle: '',
      newNewsDescription: '',
}

const newsReducer = (state = initialState, action) =>{
    let stateCopy = {...state};
    
    switch(action.type){
        case ADD_NEWS:
            let newNews = {
                id: 4,
                title: stateCopy.newNewsTitle,
                description: stateCopy.newNewsDescription,
            };

            stateCopy.news = [...state.news];
            stateCopy.news.push(newNews);
            stateCopy.newNewsTitle = '';
            stateCopy.newNewsDescription = '';
            break;
        case UPDATE_NEW_NEWS_TITLE:
            stateCopy.newNewsTitle = action.newText;
            break;
        case UPDATE_NEW_NEWS_DESCRIPTION:
            stateCopy.newNewsDescription = action.newText;
            break;
        case CLEAR_NEWS_FIELDS:
            stateCopy.newNewsTitle = '';
            stateCopy.newNewsDescription = '';
            break;
    }
    return stateCopy;
}

export const addNewsCreator = () => ({type : ADD_NEWS});
export const updateNewNewsTitleCreator = (text) => ({type:UPDATE_NEW_NEWS_TITLE, newText: text});
export const updateNewNewsDescriptionCreator = (text) => ({type: UPDATE_NEW_NEWS_DESCRIPTION, newText: text});
export const clearNewsFieldsCreator = () => ({type: CLEAR_NEWS_FIELDS});

export default newsReducer;