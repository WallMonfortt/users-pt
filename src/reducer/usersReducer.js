import { types } from "../types/types";

const initialState = {
  users:[],
  activeId: {
    id:null,
    firstname:'',
    lastname:'',
    age:0
  }
}

export const usersReducer = (state = initialState, action) =>{
  switch (action.type) {

    case types.getAllUsers:
      return{
        ...state,
        users:[...action.payload]
      }
    
      case types.createUser:
        return{
          ...state,
          users:[action.payload, ...state.users]
        }

      case types.getUserById:
        return{
          ...state,
          activeId:action.payload
        }

    default:
      return state;
  }
}