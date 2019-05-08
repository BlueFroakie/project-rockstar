// Use easyHTTP library
const url = "https://jsonplaceholder.typicode.com/users/2";
const url2 = "https://jsonplaceholder.typicode.com/users/";

/* Get request */

// EasyHTTP.get(url2)
// .then(users => console.log(users))
// .catch(error => console.log(error));

/* Post request */

const userData = {
  id: "9911",
  username: "LuisG",
  name: "Luis Garcia",
  email: "luis@correo.com"
};

// EasyHTTP.put(url, userData)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// EasyHTTP.post(url2, userData)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

/* Delete request */

EasyHTTP.delete(url)
  .then(response => console.log(response))
  .catch(err => console.log(err));



