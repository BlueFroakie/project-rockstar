/* Butoon handler */

document.querySelector('#button').addEventListener('click', () => {
    /* Objeto xhr */
    const xhr = new XMLHttpRequest();

    /* Open method */
    xhr.open('GET', 'data.txt', true);

    /* Validate no errors and send request */
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        };
    };

    xhr.onreadystatechange = function() {
        console.log("READY STATE", xhr.readyState);
        if(this.status === 200 && this.readyState === 4) {
            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
        };
    };

    /* For spinners/loaders */

    xhr.onprogress = function() {
        console.log("ready state", xhr.readyState);
    };

    /* error */

    xhr.onerror = function() {
        console.log("request error");
    };

    xhr.send();
});