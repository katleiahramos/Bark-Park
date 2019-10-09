export default function userReducer(
  state = {
    currentUser: null,
    loggedIn: false,
    currentCheckIns: []
  },
  action
) {
  switch (action.type) {
    case "BEGIN_USER_REQUEST":
      return state;
    case "GET_USER_CURRENT_CHECKINS_SUCCESS":
      return {
        ...state,
        currentCheckIns: action.payload
      };
    case "LOGIN":
      return { loggedIn: true, currentUser: action.payload.user };
    case "LOGOUT":
      console.log("in LOGOUT returning", { ...state, loggedIn: true });
      return { ...state, loggedIn: true };
    default:
      return state;
  }
}
