class Giphy{
 constructor() {
//   this.client_id = "3aad0e0ee818dcea773c"; 
//   this.client_secret = "26103a156d65e3dd571ea106357a7d4c5c48cf1a";
    this.apiKey = '1JB6MSxMXDfrlQWIfpWmvWuwswbrkAS9';
 }
 
 async getGIFS(GIFS) {
  const GIFSResponse = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=cat+funny&api_key=${this.apiKey}`
//    `https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`
  );

  const gifs = await GIFSResponse.json();

  return { gifs };
 }
}