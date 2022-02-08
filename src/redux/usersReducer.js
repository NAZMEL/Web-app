const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


let initialState = {
  users: [
    // {id: 1, fullName: 'Dima', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: true, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 2, fullName: 'Lesya', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Bogorodchany', country: 'Urkaine'}},
    // {id: 3, fullName: 'Mary', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Kalush', country: 'Urkaine'}},
    // {id: 4, fullName: 'Anton', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 5, fullName: 'Kevin', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: true, location: {city: 'IF', country: 'Urkaine'}},
    // {id: 6, fullName: 'Sasha', status: 'I\'m a boss', imgUrl:'https://www.thelawofattraction.com/wp-content/uploads/blog-Life-is-Good-Right-Now%E2%80%A6Here-are-8-Reasons-Why.jpg', followed: false, location: {city: 'Lviv', country: 'Urkaine'}},
  ],
  pageSize: 10,
  totalUsersCount: 100,
  currentPage: 1,
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
      return {...state, users: [...action.users]}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}

    default:
      return state;
  }
}

export const followCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unFollowCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users: users});
export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCountCreator = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});

export default usersReducer;