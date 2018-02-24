let query = new XMLHttpRequest();
query.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let pole = JSON.parse(this.responseText);
    }
};
query.open("GET", "database.json", true);
query.send();