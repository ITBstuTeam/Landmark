function setMapMarkerByID(inputID) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let data = JSON.parse(request.responseText);
            let pole = data.poles[inputID - 1];

            setMapMarkerByCoordinates(pole.width, pole.longitude);
        }
    };
    request.open("GET", "src/database.json", true);
    request.send();
}

function formSubmit() {
    let formInput = document.forms["inputForm"]["name"].value;

    if (formInput > 0 && formInput < 1000000) {

        let inputID = parseInt(formInput);

        setMapMarkerByID(inputID);
    }
}