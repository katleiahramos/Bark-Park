
export function loginUser(loginParams) {
    
    return (dispatch) => {
        const body = JSON.stringify(loginParams)

        dispatch({type: "BEGIN_LOGIN"})
        
        return fetch("/api/login", {
            method: 'post',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
            .then(resp => resp.json()) 
            .then( user => {
                localStorage.setItem("jwtToken", user.jwt)
                dispatch({type: "LOGIN", payload: user})})   
    }
 
}

export function logoutUser(){
    localStorage.removeItem("jwtToken")
}
