const giphy = new Giphy();
const ui = new UI();
//Search input
const searchGIFS = document.getElementById("searchGIFS");
//Search Input event Listener
searchGIFS.addEventListener("keyup", e => {
   //Get input text
   const GIFSText = e.target.value;
   //Validates that GIFSText is NOT BLANK!
   if (GIFSText !== ""){
       //Make HTTP CALL
       giphy.getGIFS(GIFSText).then(data => {
           if(data.gifs.message==="Not Found"){
               //Show alert
               ui.showAlert("User not found", "alert alert-danger");
           } else {
               console.log(data);
               const ui = new UI();
               ui.showGIFS(data.gifs);
           }
        //github.showRepos
       })
       .catch();
   } else {
       //Clear profile
       ui.clearProfile();
   }
});