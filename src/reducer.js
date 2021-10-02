export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finish developing: we copied this from the console.
    //token: 'BQAZkBLRkeJsKc7AFXCEuMIXb6e0CEoDfCUFaeHbQr5IFUUpBc3xDGxEMaxBaGmBMjKViJZ1oUa1lbfmGILoeaXmHVjGOWzqPbH200uBsNWTZSUf9eDC4HVYe6XG_vt9FW2O9l6LGVT_hO9e_eQ8KkomPwV-3jruGC33-xQWs7n8agKK'
}


const reducer = (state, action) => {
    console.log(action);

    //Action properties: type , [payload]

    switch(action.type) {
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
};


export default reducer;

//4hrs,39mins