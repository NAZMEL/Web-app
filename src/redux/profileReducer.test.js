import { isElementType } from '@testing-library/user-event/dist/utils';
import React from 'react';
import profileReducer, { addPostActionCreator, deletePost, setStatus } from './profileReducer';


let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Well, and how are you?', likesCount: 12}  
  ],
  status: null,
}

test('length of posts should increment', () => {
  let action = addPostActionCreator('new text');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('message of post shoud by correct', () => {
  let action = addPostActionCreator('new text');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe('new text');
});

test('after deleting length of posts should decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

test('after deleting length of posts shouldn\'t decrement', () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

test('set correct status', () => {
  let action = setStatus('new status');
  let newState = profileReducer(state, action);
  expect(newState.status).toBe('new status');
});