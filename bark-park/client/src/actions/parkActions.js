// addPark: park => dispatch({ type: "ADD_PARK", payload: park }),
// deletePark: parkId => dispatch({ type: "DELETE_PARK", parkId: parkId }),
// editingPark: (park) => dispatch({type: "EDITING_PARK", payload: park}),
// updatePark: (parkEdited) => dispatch({type: "UPDATE_PARK", parkEdited: parkEdited}),
// checkIn: (parkId) => dispatch({type: "CHECK_IN", parkId})

export function fetchParks(){
    console.log('in fetch parks...')
   return (dispatch) => {
       dispatch({type: 'BEGIN_PARKS_REQUEST'})
       console.log('fetching parks')
       return fetch('http://localhost:3001/api/parks')
       .then(resp =>  resp.json() )
       .then(parks => dispatch({type: 'ADD_PARKS', payload: parks}))
   }
}