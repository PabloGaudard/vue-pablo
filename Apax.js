const Apax = (url, data) => {

    return new Promise((resolve) => {
        var xhr = new XMLHttpRequest();
        //var prefix = /*window.location.hostname == "localhost" ? 'http://localhost:3000' :*/ window.location.origin;
        xhr.open("POST", url, true);
        xhr.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        );
        //  xhr.setRequestHeader(
        //  "Access-Control-Allow-Origin",
        //"http://localhost:8080"
        //); //Access-Control-Allow-Origin: *

        xhr.onload = function () {
            resolve(JSON.parse(this.responseText));
            //resolve(this.responseText);
        };

        var str = Object.keys(data)
            .map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            })
            .join("&");

        xhr.send(str);
    });

}

export default Apax;