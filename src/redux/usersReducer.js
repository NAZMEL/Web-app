const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  users: [
    // {id: 1, fullName: 'Dima', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: true, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 2, fullName: 'Lesya', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Bogorodchany', country: 'Urkaine'}},
    // {id: 3, fullName: 'Mary', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Kalush', country: 'Urkaine'}},
    // {id: 4, fullName: 'Anton', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 5, fullName: 'Kevin', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: true, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 6, fullName: 'Sasha', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Lviv', country: 'Urkaine'}},
  ]
}

const usersReducer = (state = initialState, action) =>{

  switch(action.type){
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map( user => {
          if(user.id === action.userId){
            return {...user, followed: true}
          }

          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map( user => {
          if(user.id === action.userId){
            return {...user, followed: false}
          }

          return user;
        }),
      };
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}

    default:
      return state;
  }
}

export const followCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users: users});

export default usersReducer;