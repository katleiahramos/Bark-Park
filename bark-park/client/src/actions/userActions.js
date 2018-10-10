
export function loginUser(loginParams) {
    const body = JSON.stringify(loginParams)
        return fetch("/api/login", {
            method: 'post',
            body: body,
            headers: { "Content-type": 'application/json' },
        })
            .then(resp => resp.json())
            
    

        
}

export function logoutUser(){
    localStorage.removeItem("jwtToken")
}
