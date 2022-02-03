const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_TITLE = 'UPDATE-NEW-NEWS-TITLE';
const UPDATE_NEW_NEWS_DESCRIPTION = 'UPDATE-NEW-NEWS-DESCRIPTION';

const newsReducer = (state, action) =>{
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
    }
    return state;
}

export const addNewsCreator = () => ({type : ADD_NEWS});
export const updateNewNewsTitleCreator = (text) => ({type:UPDATE_NEW_NEWS_TITLE, newText: text});
export const updateNewNewsDescriptionCreator = (text) => ({type: UPDATE_NEW_NEWS_DESCRIPTION, newText: text});

export default newsReducer;