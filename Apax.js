const Apax = (url, data) => {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            resolve(this.responseText);
            //resolve(JSON.parse(this.responseText));
        };

        //CONVERT DATA(ARRAY) INTO URL
        var out = [];
        for (var key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                out.push(key + '=' + encodeURIComponent(data[key]));
            }
        }
        //SEND DATA
        xhr.send(out.join('&'));
    });
}

export default Apax;