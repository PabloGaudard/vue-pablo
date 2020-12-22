const Apax = (url, data) => {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        //var prefix = /*window.location.hostname == "localhost" ? 'http://localhost:3000' :*/ window.location.origin;
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            //resolve(JSON.parse(this.responseText));
            resolve(this.responseText);
        };
        xhr.send('mensagem=' + data.mensagem);
    });
}

export default Apax;