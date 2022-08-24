import { v1 } from "uuid";

const FOLLOW ="FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS="SET_USERS";

let initialState ={
    users: [
        {id: v1(),followed:true, fullName:"Name S.", status:"Who i am", location:{city:"Krakow", country:"Polska"}},
        {id: v1(),followed:true, fullName:"Name S.", status:"Work hard", location:{city:"Warshaw", country:"Polska"}},
        {id: v1(),followed:false, fullName:"Name S.", status:"Procrastination is not about me", location:{city:"Wroclaw", country:"Polska"}},
        {id: v1(),followed:true, fullName:"Name S.", status:"Looking for job", location:{city:"Wieliczka", country:"Polska"}},
    ],newPostText:"FLUX data"
}
 const userReducer=(state=initialState, action)=>{

    switch(action.type){
        case FOLLOW:
           return{
            ...state,
            users:state.users.map(u=>{
                if(u.id===action.userID){
                    return{...u, followed:true}
                }
                return u;
            })
        };

        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userID){
                        return{...u, followed:false}
                    }
                    return u;
                })
            };

            case SET_USERS:
                return{...state, users:[...state, ...action.users]}
        default: return state;
    }
}

export const followActionCreator = (userID) => ({
    type: FOLLOW,
    userID

})
export const unfollowActionCreator = (userID) => ({
    type: UNFOLLOW,
    userID

})
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users
})
// export const onPostChangeActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text

// })
export default userReducer