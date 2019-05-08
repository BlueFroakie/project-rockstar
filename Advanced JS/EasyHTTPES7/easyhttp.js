class EasyHTTP {
  //Make an HTTP GET request
  static async get(url) {
    const response = await fetch(url2);
    const data = await response.json();
    return data;
  }
  //Make an HTTP PUT request
  static async put(url, putData) {
    const request = {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(putData)
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }
  //Make an HTTP POST request
  static async post(url, postData) {
    const request = {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(postData)
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }
  //Make an HTTP DELETE request
  static async delete(url, deleteData) {
    const request = {
      method: "DELETE",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(deleteData)
    };
    const response = await fetch(url, request);
    const data = await response.json();
    return data;
  }
}
