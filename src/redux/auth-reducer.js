import { authAPI } from '../api/api';

const SET_USER_DATA ="SET_USER_DATA";

 //const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";
let initialState ={
    id:null,
    login:null,
    email:null,
    isAuth:false,
    // isFetching: false,
}
 const authReducer=(state=initialState, action)=>{

    switch(action.type){
        case SET_USER_DATA:
            return{...state, ...action.data,isAuth:true};
        //  case TOGGLE_IS_FETCHING:
        //      return{...state, isFetching:action.isFetching}
        default: return state;
    }
}

export const setAuthUserData = (id,login,email) => ({
    type: SET_USER_DATA,
    data:{
        id,
        login,
        email},
})


export const getAuthUserData =()=>{
    return (dispatch)=>{
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            })
    }

}

//  export const toggleIsFetching = (isFetching) => ({
//      type: TOGGLE_IS_FETCHING,
//      isFetching
//  })
export default authReducer