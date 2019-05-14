var button = document.getElementById('dropBomb');
button.addEventListener('click', () => {
    console.log("Bomb dropped!");
    var xhr = new XMLHttpRequest();
    const x = document.querySelector('#inputx').value || 0;
    const y = document.querySelector('#inputy').value || 0;
    xhr.open('POST', `/battleship/dropbomb/${x}/${y}`, true);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('finished', xhr.responseText);
        }
    }
});