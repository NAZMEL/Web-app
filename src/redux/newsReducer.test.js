import newsReducer, { addNewsCreator, updateNewNewsDescriptionCreator, updateNewNewsTitleCreator } from "./newsReducer";


let state = {
    news:[
        {id: 1, title: 'The first news', description: 'Here will be description'},
        {id: 2, title: 'The second news', description: 'Here will be description'},
      ],
      newNewsTitle: '',
      newNewsDescription: '',
}


test('add news', () => {
    let action = addNewsCreator();
    let newState = newsReducer(state, action);
    expect(newState.news.length).toBe(3);
});

test('update news title', () => {
    let action = updateNewNewsTitleCreator('new title');
    let newState = newsReducer(state, action);
    expect(newState.newNewsTitle).toBe('new title');
});

test('update news title', () => {
    let action = updateNewNewsDescriptionCreator('new description');
    let newState = newsReducer(state, action);
    expect(newState.newNewsDescription).toBe('new description');
});