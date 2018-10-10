
export function loginUser(loginParams) {

    return (dispatch) => {
        const body = JSON.stringify(loginParams)

        dispatch({ type: "BEGIN_LOGIN" })

        return fetch("/api/login", {
            method: 'post',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
            .then(resp => resp.json())
            .then(userInfo => {
                localStorage.setItem("jwtToken", userInfo.jwt)
                localStorage.setItem("currentUser", userInfo.user.username)
                dispatch({ type: "LOGIN", payload: userInfo })
            })
    }

}

export function logoutUser() {
    localStorage.removeItem("jwtToken")
    localStorage.removeItem("currentUser")
}
