export default function parkReducer(state= {
    parks: [
      {
        name: 'Wriggly Field Dog Friendly Area',
        address: '2645 N Sheffield Ave, Chicago, IL 60614',
        count: 1
      }
    ]
  }, action){
    switch(action.type){
        case 'ADD_PARK':
        console.log(action.payload)
        console.log('returning',  {parks: state.parks.concat(action.payload)})
          return {parks: state.parks.concat(action.payload)}
        default: 
            return state
    }
}