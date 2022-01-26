
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

  let state = {
      posts: posts,
      dialogs: dialogs,
      messages: messages
  }


  export default state;