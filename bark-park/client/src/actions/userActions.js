
export function loginUser(loginParams) {

    return (dispatch) => {
        const body = JSON.stringify(loginParams)

        dispatch({ type: "BEGIN_USER_REQUEST" })

        return fetch("/api/login", {
            method: 'POST',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
            .then(resp => resp.json())
            .then(userInfo => {
                if(userInfo.error){
                    window.alert(userInfo.error)
                }else {
                    localStorage.setItem("jwtToken", userInfo.jwt)
                    // localStorage.setItem("currentUser", userInfo.user.username)
                    dispatch({ type: "LOGIN", payload: userInfo })
                }

            })
    }

}

export function createUser(userParams){
    return (dispatch)=>{
        const body = JSON.stringify(userParams)
        dispatch({ type: "BEGIN_USER_REQUEST"})
        return fetch('/api/users', {
            method: 'POST',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
        .then( resp => resp.json())
    }
}

export function logoutUser() {
    localStorage.removeItem("jwtToken")
    // localStorage.removeItem("currentUser")
}
