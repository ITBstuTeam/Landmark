function getPoleCoordinatesByID(inputID) {
    let request = new XMLHttpRequest();

    let pole;

    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(request.responseText);
            pole = data.poles[inputID - 1];

            console.log(pole);
            return pole;
        }


    };
    request.open("GET", "/src/database.json", true);

    request.send();
}

let coordinates = getPoleCoordinatesByID(2);
console.log(coordinates);