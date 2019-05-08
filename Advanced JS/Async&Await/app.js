const hello = async () => {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Hello there'), 1000);
  });
  const res = await promise;
  return res;
};

hello()
  .then(response => console.log(response));

const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  //Await for fetch call
  const response = await fetch(url);

  //Proceed onlye when promise is resolved
  const data = await response.json();

  //Return data after second promise is resolved
  return data;
};

getUsers().then(users => console.log(users));