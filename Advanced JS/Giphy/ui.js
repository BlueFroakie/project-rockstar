class UI {
    constructor() {
      this.GIFS = document.getElementById("GIFS");
    }
  
    // Display GIFS in UI
    showGIFS(GIFS) {
      this.GIFS.innerHTML = `
  <div class="card card-body mb-3">
      <div class="row">
          <div class="col-md-3">
              <img src="${GIFS.avatar_url}" class="img-fluid mb-2">
              <a href="${GIFS.html_url}" target="_blank" class="btn 
                 btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div col-md-9>
              <span class="badge badge-primary mb-2">Public Repos: ${
                GIFS.public_repos
              }</span>
              <span class="badge badge-secondary mb-2">Public Gists: ${
                GIFS.public_gists
              }</span>
              <span class="badge badge-success mb-2">Followers: ${
                GIFS.followers
              }</span>
              <span class="badge badge-info mb-2">Following: ${
                GIFS.following
              }</span>
              <br><br>
              <ul class="list-group">
                  <li class="list-group-item">Company: ${GIFS.data[0].type}</li>
                  <li class="list-group-item">Website/Blog: ${GIFS.blog}</li>
                  <li class="list-group-item">Location: ${GIFS.location}</li>
                  <li class="list-group-item">Member Since: ${
                    GIFS.created_at
                  }</li>
              </ul>
          </div>
      </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>
  `;
    }
  
    // PART 5.1
    // Show GIFS repos
    showRepos(repos) {
      let output = "";
  
      repos.forEach(repo => {
        output += `
     <div class="card card-body mb-2">
        <div class="row">
              <div class="col-md-6">
                <a href="${repo.html_url}" target='_blank' >${repo.name}</a>
              </div>
            
              <div class="col-md-6">
              
              <span class="badge badge-primary">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-secondary">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
  
              </div>
        </div>
     </div>
    `;
      });
  
      // Output the repository
      document.getElementById("repos").innerHTML = output;
    }
  
    // Clear Profile
    clearProfile() {
      this.profile.innerHTML = "";
    }
  
    // Show Alert Message
    showAlert(message, className) {
      // Clear any remaining alerts
      this.clearAlert();
      // Create Div
      const div = document.createElement("div");
      // Add Classes
      div.className = className;
      // add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector(".searchContainer");
      // Get Search Box
      const search = document.querySelector(".search");
      // Insert alert
      container.insertBefore(div, search);
  
      // Set timeout after 3 secs
      setTimeout(() => {
        this.clearAlert();
      }, 3000);
    }
    // Clear Alert Message
    clearAlert() {
      const currentAlert = document.querySelector(".alert");
      if (currentAlert) {
        currentAlert.remove();
      }
    }
  }