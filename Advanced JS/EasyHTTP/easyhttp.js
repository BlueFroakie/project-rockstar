function easyHTTP() {
    this.http = new XMLHttpRequest();
  }
  
  // easyHTTP.prototype.get = function(url) {
  //   this.http.open("GET", url, true);
  
  //   self = this;
  //   this.http.onload = function() {
  //     if ((self.http.status === 200)) {
  //       console.log(self.http.responseText);
  //     }
  //   };
  //   this.http.send();
  // };

  easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
  
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
  };
  
