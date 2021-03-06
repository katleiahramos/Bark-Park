import cuid from "cuid";

export default function parkReducer(
  state = {
    parks: [],
    loggedIn: false, 
    editingParks: false,
    parkToEdit: null,
    checkIn: null,
  },
  action
) {
  let parks = []

  switch (action.type) {
    case 'BEING_PARKS_REQUEST':
      console.log('sending request...');
      return state

    case 'ADD_PARKS':
      console.log('ADD_PARKS is returning..', { parks: action.payload });
      return { ...state, editingParks: false, parkToEdit: null, parks: action.payload }

    case "ADD_NEAR_BY":
      console.log(action.payload); //{name: "test", address: "test"}
      const park = { ...action.payload, id: cuid(), count: 0 }; //{name: "test", address: "test", id: "cjmkq4hx100003b5x1m6mdqyu", count: 0}
      console.log("returning", { parks: state.parks.concat(park) });
      return { parks: state.parks.concat(park) };

    // case "DELETE_PARK":
    //   parks = state.parks.filter(park => park.id !== action.parkId)
    //   console.log('after delete parks are', { parks: parks })
    //   return { parks: parks };
    case 'CLOSE_MODAL':
      return {...state, editingParks: false, parkToEdit: false}

    case 'EDITING_PARK':
      console.log('in editing parks');

      return { parks: state.parks, editingParks: true, parkToEdit: action.payload }

    case 'UPDATE_PARK':
      console.log('updating park...');

      // parks = state.parks.map(park => park.id === action.parkEdited.id ? action.parkEdited : park)
      // console.log('parks is now...', parks)
      return { editingParks: false, parkToEdit: null, parks: parks }

    case 'CHECK_IN':
      return { ...state, checkIn: action.payload}
    case 'CHECK_OUT':
      return {...state, checkIn: null}
    default:
      return state;
  }
}
