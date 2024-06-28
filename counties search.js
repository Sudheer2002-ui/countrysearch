let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");

function sud(result) {
    let name = result["name"];
    let flag = result["flag"];
    let population = result["population"];
    searchInput.addEventListener("keydown", function(event) {
        let se = searchInput.value;
        if (se === result["name"] && event.key === "Enter") {
            let dv = document.createElement("div");
            resultCountries.appendChild(dv);
            dv.classList.add("country-card", "d-flex", "flex-row", "mt-5", "pt-3", "pl-5", "pb-3");
            let cf = document.createElement("img");
            cf.classList.add("country-flag");
            cf.src = flag;
            dv.appendChild(cf);
            let dvv = document.createElement("div");
            dvv.classList.add("pb-3", "pl-3");
            dv.appendChild(dvv);
            let cn = document.createElement("h1");
            cn.classList.add("country-name");
            cn.textContent = name;
            dvv.appendChild(cn);
            let cp = document.createElement("p");
            cp.classList.add("country-population");
            cp.textContent = population;
            dvv.appendChild(cp);
        }
    });
}

function createAndAppend(result) {
    let {
        flag,
        name,
        population
    } = result;

    if (true) {
        sud(result);
    } else {
        let dv = document.createElement("div");
        resultCountries.appendChild(dv);
        dv.classList.add("country-card", "d-flex", "flex-row", "mt-5", "pt-3", "pl-5", "pb-3");
        let cf = document.createElement("img");
        cf.classList.add("country-flag");
        cf.src = flag;
        dv.appendChild(cf);
        let dvv = document.createElement("div");
        dvv.classList.add("pb-3", "pl-3");
        dv.appendChild(dvv);
        let cn = document.createElement("h1");
        cn.classList.add("country-name");
        cn.textContent = name;
        dvv.appendChild(cn);
        let cp = document.createElement("p");
        cp.classList.add("country-population");
        cp.textContent = population;
        dvv.appendChild(cp);
    }
}

function displayResults(jsonData) {
    for (let result of jsonData) {
        createAndAppend(result);
    }
}

function vetuku() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            displayResults(jsonData);
        });
}
vetuku();