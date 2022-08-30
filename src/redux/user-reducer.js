const FOLLOW ="FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS="SET_USERS";
const SET_CURRENT_PAGE="SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT="SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING";

let initialState ={
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching: false,
}
 const usersReducer=(state=initialState, action)=>{

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
                return{...state, users:[...action.users]}
            case SET_CURRENT_PAGE:
                return{...state, currentPage:action.currentPage}
            case SET_TOTAL_USERS_COUNT:
                return{...state,totalUsersCount:action.count>50?action.count=50:action.count }
            case TOGGLE_IS_FETCHING:
                return{...state, isFetchin:action.isFetching}
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
export const setCurrentPageActionCreator = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count:totalUsersCount
})
export const toggleIsFetchingActionCreator = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export default usersReducer