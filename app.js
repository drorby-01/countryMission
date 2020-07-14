const PNG = ".png"

$(document).ready(function () {

    function getDataFromJson() {
        return new Promise((resolve, reject) => {
            $.getJSON('countries.json', function (data) {
                resolve(data);
            })
        })
    }

    function Country(countryName, countryFlagImage, numberOfCitzen = Math.floor(Math.random() * Math.pow(10, 7))) {
        this.countryName = countryName;
        this.countryFlagImage = countryFlagImage;
        this.numberOfCitzen = numberOfCitzen
    }

    function makeACountryCard(country) {

        return $(
            `<div class="card" style="width: 18rem; margin:10px;;">
                <img src="${country.countryFlagImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.countryName}</h5>
                    <p class="card-text">citzen:${country.numberOfCitzen}</p>
                </div>
            </div>`
        )
    }

   $("button").click(function (e) { 
    $(this).hide()
    getDataFromJson().then(res => {
        res.forEach((value, index) => {
            let country = new Country(value.name, value.alpha2 + PNG)
            $("#countriesContainer").append(makeACountryCard(country))
        })
    })  

   }); 

});
