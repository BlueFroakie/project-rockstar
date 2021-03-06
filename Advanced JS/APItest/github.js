class GitHub{
 constructor() {
  this.client_id = "3aad0e0ee818dcea773c"; //From GitHub OAuth App
  this.client_secret = "26103a156d65e3dd571ea106357a7d4c5c48cf1a";
 }
 
 async getUser(user) {
  const profileResponse = await fetch(
   `https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`
  );

  const profile = await profileResponse.json();

  return { profile };
 }

 async showRepos(user) {
   const profileReposResponse = await fetch(
     `https://api.github.com/users/${user}/repos?client_id=${this.client_id}$client_secret=${this.client_secret}`
   );

   const profileRepos = await profileReposResponse.json();
   return { profileRepos };
 }
}