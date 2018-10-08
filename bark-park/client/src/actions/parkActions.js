// addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
// deletePark: parkId => dispatch({ type: "DELETE_PARK", parkId: parkId }),
// editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
// updatePark: (parkEdited) => dispatch({type: "UPDATE_PARK", parkEdited: parkEdited}),
// checkIn: (parkId) => dispatch({type: "CHECK_IN", parkId})

import Geocode from "react-geocode";


export function findNearByParks(currentLocation) {

    console.log('in addNearByParks');
    const { lat, lng } = { lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude }

    return (dispatch) => {
        const secret = ""
        const id = ""
        dispatch({ type: 'BEGIN_PARKS_REQUEST' })
        console.log('fetching near by parks')

        return fetch(`https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&query=dog+park&limit=5&client_id=${id}&client_secret=${secret}&v=20181004`)
            .then(resp => resp.json())
            .then(results => {
                const parks = results.response.venues
                for (const park of parks) {
                    
                    dispatch({
                        type: "ADD_NEAR_BY",
                        payload: {name: park.name, address: park.location.address, lat: park.location.lat, long: park.location.lng}
                    })
                }
            })
            
    }
}


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



export function postPark(latLong, park) {
    console.log('in postPark with', park);
    console.log('latLong is', latLong);
    
    return (dispatch) => {
        dispatch({ type: "BEGIN_PARKS_REQUEST" })

       const body = JSON.stringify({ park: { name: park.name, address: park.address, count: 0, lat: latLong.lat, long: latLong.lng } })
    
        return fetch('/api/parks', {
            method: 'POST',
            headers: { "Content-type": 'application/json' },
            body: body,
        })
            .then(resp => resp.json())
            .then(parks => dispatch({ type: 'ADD_PARKS', payload: parks }))
    }
}

export function createPark(park) {
    return (dispatch) => {
        dispatch({ type: "BEGIN_PARKS_REQUEST" })

        Geocode.setApiKey("AIzaSyBVugmujTPCHIqrUrOqE4hrGSxj6eWoSY0");
        return Geocode.fromAddress(`${park.address}`)
            .then(resp => resp.results[0].geometry.location)
            .then(respLatLong => {
                
                dispatch(postPark(respLatLong, park))
            })
    }
}



// TODO: is having dispatch inside the function redundant? 
// TODO: why do we need dispatch begin parks request?

export function deletePark(parkId) {
    console.log('in deletePark with id', parkId);
    return (dispatch) => {

        dispatch({ type: "BEGIN_PARKS_REQUEST" });
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

export function checkIn(park){
    const parkCheckedIn = {...park, count: ++park.count }
    return (dispatch)=>{dispatch(updatePark(parkCheckedIn))};
}

