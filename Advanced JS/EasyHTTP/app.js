// Use easyHTTP library
const http = new easyHTTP();
url = "https://jsonplaceholder.typicode.com/posts";

const data = {
  title: "this is a nice post",
  body: "this is a nice body"
};
http.post(url, data, (error, result) => { error ? console.log(error) : console.log(result)});

