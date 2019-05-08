const getText = () => fetch('textData.txt')
.then(response => response.text())
.then(data => console.log(data))
.catch();

const getJSON = () => fetch('JSONdata.json')
.then(response => response.json())
.then(data => {
    let output = "";
    data.forEach(person => output += `<li>${person.name} works for ${person.company}</li>`);
    document.querySelector('#output').innerHTML = output;
});

const getAPI = () => fetch("https://api.coinmarketcap.com/v2/ticker/1/")
.then(response => response.json())
.then(coin => {
    let output = `<li> ID: ${coin.data.id} : ${coin.data.symbol}
        ${coin.data.name} Rank ${coin.data.rank}</li>
        <li> Coin Value (USD) $${coin.data.quotes.USD.price}</li>
        <li> Percentage of change in: 1 Hr: ${
            coin.data.quotes.USD.percent_change_1h}
            % / 24 Hrs: ${coin.data.quotes.USD.percent_change_24h}%
        `;
    document.querySelector('#output').innerHTML = output;
})
.catch();

const getSymbol = () => fetch("https://api.coinmarketcap.com/v2/listings/")
.then(response => response.json())
.then(returnedData => returnedData.data.find(cryptos => cryptos.name === 'Ethereum'))
.then(data => fetch(`https://api.coinmarketcap.com/v2/ticker/${data.id}/`)
    .then(response => response.json())
    .then(coin => console.log(`${coin.data.id} ${coin.data.name} ${coin.data.quotes.USD.percent_change_1h}`)))
.catch();

document.querySelector('#get-text').addEventListener('click', getText);
document.querySelector('#get-JSON').addEventListener('click', getJSON);
document.querySelector('#get-API').addEventListener('click', getAPI);
document.querySelector('#get-symbol').addEventListener('click', getSymbol);