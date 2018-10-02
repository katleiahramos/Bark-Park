// addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
// deletePark: parkId => dispatch({ type: "DELETE_PARK", parkId: parkId }),
// editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
// updatePark: (parkEdited) => dispatch({type: "UPDATE_PARK", parkEdited: parkEdited}),
// checkIn: (parkId) => dispatch({type: "CHECK_IN", parkId})

export function fetchParks() {
    console.log('in fetch parks...')
    return (dispatch) => {
        dispatch({ type: 'BEGIN_PARKS_REQUEST' })
        console.log('fetching parks')
        return fetch('/api/parks', {
            accept: 'application/json'
        })
            .then(resp => resp.json())
            .then(parks => dispatch({ type: 'ADD_PARKS', payload: parks }))
    }
}

export function postPark(park) {
    console.log('in postPark with', park);
    return (dispatch) => {
        dispatch({ type: "BEGIN_BOOKS_REQUEST" })
        const body = JSON.stringify({ park: { name: park.name, address: park.address, count: 0 } })
        return fetch('/api/parks', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: body,
        })
            .then(resp => resp.json())
            .then(parks => dispatch({ type: 'ADD_PARKS', payload: parks }))
    }
}

// TODO: is having dispatch inside the function redundant? 
// TODO: why do we need dispatch begin books request?

export function deletePark(parkId) {
    console.log('in deletePark with id', parkId);
    return (dispatch) => {

        dispatch({ type: "BEGIN_BOOKS_REQUEST" });
        return fetch(`/api/parks/${parkId}`, {
            method: 'DELETE',
        }).then(() => console.log("park was deleted"))
        .then(() => dispatch(fetchParks()))
    }
}

export function updatePark(park) {
    console.log('in update park, park is:', park)
    return(dispatch)=>{
        dispatch({type: "BEGIN_BOOKS_REQUEST"});
        const body = JSON.stringify({ park: { name: park.name, address: park.address, count: park.count} })
        return fetch(`/api/parks/${park.id}`, {
            method: 'PATCH',
            headers: { "Content-type": 'application/json' },
            body: body,
        })
        .then( resp => console.log('park updated'))
        .then(() => dispatch(fetchParks()))
        
    }
}

