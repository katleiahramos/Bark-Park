export default function userReducer(
    state = {
        currentUser: null,
        loggedIn: false, 
    },
    action
) {
    switch (action.type) {
        case 'BEGIN_LOGIN':
            return state; 
        case 'LOGIN':
            return { loggedIn: true, currentUser: action.payload .user }
        case 'LOGOUT':
            console.log("in LOGOUT returning", { ...state, loggedIn: true });
            return state
        default:
            return state;
    }

}