[] The code should be written in ES6 as much as possible
    - TODO: clarify

[x] Use the create-react-app generator to start your project.

[x]Follow the instructions on this repo to setup the generator: create-react-app

[x]Your app should have one HTML page to render your react-redux application
    - index.html

[x]There should be 2 container components
    - map container 
    - parks container 
[]There should be 5 stateless components
    - Park.js 
    - Parks.js  
    - Router TODO: make this a stateless component 
    - Navbar 
    - Welcome Page TODO: stateless component 
[]There should be 3 routes
    - welcome page  '/welcome?'
    - App : '/app' 
    - Login '/login'

[x]The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)
    - router used for routes mentioned above 

[x]Use Redux middleware to respond to and modify state change
    - reducers (parkReducer)
    - actions 

[x]Make use of async actions to send data to and receive data from a server
    - rails API 

[x]Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.

[]Your client-side application should handle the display of data with minimal data manipulation
    - TODO: clarify what this means 

[x]Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
    - react-materialize 