import dialogsReducer, { addMessageActionCreator, updateMessageActionCreator } from "./dialogsReducer";

let state = {
    messages: [
      {id: 1, message: 'Message'},
      {id: 2, message: 'Message 2'},
    ],
    newMessageText: '',
}


test('add new message', () => {
    let action = addMessageActionCreator('new message');
    let newState = dialogsReducer(state, action);
    expect(newState.messages.length).toBe(3);
});

test('added new message is correct', () => {
    let action = addMessageActionCreator('new message');
    let newState = dialogsReducer(state, action);
    expect(newState.messages[2].message).toBe('new message');
});

test('update message text', () => {
    let action = updateMessageActionCreator('update exist message');
    let newState = dialogsReducer(state, action);
    expect(newState.newMessageText).toBe('update exist message');
});