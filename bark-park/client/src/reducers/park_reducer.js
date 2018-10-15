import cuid from "cuid";

export default function parkReducer(
  state = {
    parks: [],
    loggedIn: false, 
    editingParks: false,
    parkToEdit: null,
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
      return { parks: action.payload }

    case "ADD_NEAR_BY":
      console.log(action.payload); //{name: "test", address: "test"}
      const park = { ...action.payload, id: cuid(), count: 0 }; //{name: "test", address: "test", id: "cjmkq4hx100003b5x1m6mdqyu", count: 0}
      console.log("returning", { parks: state.parks.concat(park) });
      return { parks: state.parks.concat(park) };

    // case "DELETE_PARK":
    //   parks = state.parks.filter(park => park.id !== action.parkId)
    //   console.log('after delete parks are', { parks: parks })
    //   return { parks: parks };

    case 'EDITING_PARK':
      console.log('in editing parks');

      return { parks: state.parks, editingParks: true, parkToEdit: action.payload }
    // case 'UPDATE_PARK':
    //   console.log('updating park...');

    //   parks = state.parks.map(park => park.id === action.parkEdited.id ? action.parkEdited : park)
    //   console.log('parks is now...', parks)
    //   return { editingParks: false, parkToEdit: null, parks: parks }
    case 'CHECK_IN':
      console.log("checking in...");
      // action.payload -> id: 6, user_id: 2, park_id: 1, active: true, checkin_date: "2018-10-11T20:31:25.303Z"}
      parks = state.parks.map(park => park.id === action.payload.parkId ? { ...park, count: ++park.count} : park)
      console.log('returning', parks);
      return { ...state, parks: parks }

    default:
      return state;
  }
}
