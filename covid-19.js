// Wel-Come
console.log("Wel-come To COVID-19 List");

// resource
let insertP = document.querySelector("tbody");
let url = "https://api.covid19api.com/summary"

// fecthing and displaying
function insertingDetails() {
    // start
    fetch(url).then(function(resp) {
        // convert data to json
        return resp.json()
    }).then(function(data) {
        // resource
        let world = data.Global
        let countaries = data.Countries

        // world
        // adding to display
        insertP.innerHTML += `<tr>
        <td>1</td>
        <td>World Wide</td>
        <td>${world.TotalConfirmed}</td>
        <td>${world.TotalDeaths}</td>
        </tr>`

        // countaries        
        // adding to display
        let srno = 2
        for (const key of countaries) {
            insertP.innerHTML += `<tr>
            <td>${srno}</td>
            <td>${key.Country}</td>
            <td>${key.TotalConfirmed}</td>
            <td>${key.TotalDeaths}</td>
            </tr>`

            srno += 1;
        }
        console.log(data);
    })
}

insertingDetails()