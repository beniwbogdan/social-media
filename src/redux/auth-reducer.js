const SET_USER_DATA ="SET_USER_DATA";

let initialState ={
    id:null,
    login:null,
    email:null,
    isFetching: false,
}
 const authReducer=(state=initialState, action)=>{

    switch(action.type){
        case SET_USER_DATA:
           return{...state, ...action.data};
        default: return state;
    }
}

export const setUserData = (id,login,email) => ({
    type: SET_USER_DATA,
    data:{
        id,
        login,
        email},
})

export default authReducer