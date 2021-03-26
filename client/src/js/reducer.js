
import {GETUSERS,ADDUSER }from  './ActionTypes'
    const initialState={
        users:[],
        loading:true,
    
    
};

function reducer(state=initialState,action) {
 switch ( action.type) {
   case  GETUSERS  :
       return {...state,loading:false,users:action.payload}
       case  ADDUSER :
           return {...state,users:[...state.users,action.payload]}
       default: return state 
 }
}

export default reducer
