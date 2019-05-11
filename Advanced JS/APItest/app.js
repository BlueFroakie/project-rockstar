const github = new GitHub();
const ui = new UI();
//Search input
const searchUser = document.getElementById("searchUser");
//Search Input event Listener
searchUser.addEventListener("keyup", e => {
   //Get input text
   const userText = e.target.value;
   //Validates that userText is NOT BLANK!
   if (userText !== ""){
       //Make HTTP CALL
       github.getUser(userText).then(data => {
           if(data.profile.message==="Not Found"){
               //Show alert
               ui.showAlert("User not found", "alert alert-danger");
           } else {
               console.log(data);
               const ui = new UI();
               ui.showProfile(data.profile);
           }
        //github.showRepos
       })
       .catch();
   } else {
       //Clear profile
       ui.clearProfile();
   }
});