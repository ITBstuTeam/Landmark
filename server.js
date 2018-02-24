function setMapMarkersByID(inputID) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(request.responseText);
            let pole = data.poles[inputID - 1];

            console.log(pole);
            //TODO: get ID from HTML form
        }

        request.open("GET", "/src/database.json", true);
        request.send();
    };

    function IDFormValidation() {
        let x = document.forms["myForm"]["value"].value;
        console.log(x);
        if (x === "") {
            alert("Name must be filled out");
        }
    }
}