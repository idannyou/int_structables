// creating user in browser

// creating user
let user_1 = {username: 'testing', password: 'testing'}

$.ajax({
 method: 'POST',
 url: '/api/users',
 data: {user: user_1}
});

// logging out
 $.ajax({
   method: 'DELETE',
   url: '/api/session'
 })

// logging in
let user_1 = {username: 'testing', password: 'testing'}

$.ajax({
  method: 'POST',
  url: '/api/session',
  data: {user: user_1}
})


// testing on console in browser

let user_1 = {username: 'testing', password: 'testing'}

login(user_1)

//testing on console using window.store

store.getState()

store.dispatch(login({username: 'testing2', password: 'testing2'}))
store.dispatch(logout())
store.dispatch(signup({username: 'testing3', password: 'testing3'}))

store.dispatch(login({username: 'testing3', password: 'testing3'}))

// Bench ajax request

$.ajax({
  method: 'GET',
  url: '/api/benches'
});

bench1 = {description: 'testing', lat: ''};

$.ajax({
  method: 'POST',
  url: '/api/benches',
  data: {bench: bench1}
});

//Bench Action testing

window.fetchBenches = fetchBenches;
store.dispatch(fetchBenches()).then(console.log);

// Bench filter
filter =  {
    bounds: {
      "northEast":{"lat":"37.80971", "lng":"-122.39208"},
     "southWest": {"lat":"37.74187", "lng":"-122.47791"}
    }
  };

  store.dispatch(fetchBenches(filter)).then(console.log);
