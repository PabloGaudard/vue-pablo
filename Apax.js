const Apax = (url, data) => {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        var prefix = window.location.hostname == "localhost" ? 'http://localhost:3000' : window.location.origin;
        xhr.open('POST', prefix + '/api/' + url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            resolve(this.responseText);
            //resolve(JSON.parse(this.responseText));
        };

        var out = [];
        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                out.push(key + '=' + encodeURIComponent(data[key]));
            }
        }

        xhr.send(out.join('&'));
    });
}

export default Apax;