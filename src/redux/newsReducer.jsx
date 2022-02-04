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
    switch(action.type){
        case ADD_NEWS:
            let newNews = {
                id: 4,
                title: state.newNewsTitle,
                description: state.newNewsDescription,
            };

            state.news.push(newNews);
            state.newNewsTitle = '';
            state.newNewsDescription = '';
            break;
        case UPDATE_NEW_NEWS_TITLE:
            state.newNewsTitle = action.newText;
            break;
        case UPDATE_NEW_NEWS_DESCRIPTION:
            state.newNewsDescription = action.newText;
            break;
        case CLEAR_NEWS_FIELDS:
            state.newNewsTitle = '';
            state.newNewsDescription = '';
            break;
    }
    return state;
}

export const addNewsCreator = () => ({type : ADD_NEWS});
export const updateNewNewsTitleCreator = (text) => ({type:UPDATE_NEW_NEWS_TITLE, newText: text});
export const updateNewNewsDescriptionCreator = (text) => ({type: UPDATE_NEW_NEWS_DESCRIPTION, newText: text});
export const clearNewsFieldsCreator = () => ({type: CLEAR_NEWS_FIELDS});

export default newsReducer;