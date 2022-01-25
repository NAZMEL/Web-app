import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts=[
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'Well, and how are you?', likesCount: 12}
]

let dialogs=[
  {id: 1, name: 'Nazar'},
  {id: 1, name: 'Nazar'},
  {id: 1, name: 'Nazar'},
  {id: 1, name: 'Nazar'},
  {id: 1, name: 'Nazar'},
  {id: 1, name: 'Nazar2'},
];

let messages=[
  {id: 1, message: 'Message'},
  {id: 1, message: 'Message 2'},
  {id: 1, message: 'Message 3'},
  {id: 1, message: 'Message 4'},
  {id: 1, message: 'Message 5'},
  {id: 1, message: 'Message 6'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
