document.querySelector("#btnSearch").addEventListener("click", () => {
    let text =document.querySelector("#txtSearch").value;
    document.querySelector("#details").style.opacity = 0;

    // console.log(text);
    getCountry(text);
});

// ÖNEMLİ XML ile request attığımızda dönüş olarak promise yapısını almayız fakat fetch yapısında geri dönüşleri promise olarak alabiliriz.
function getCountry(country){
        fetch('https://restcountries.com/v3.1/name/'+ country)
        // console.log(request);
            .then((response) => {
                // console.log(response);search inputuna rasgele bir değer girip aaa gibi console.log(yaptığımızda) bize response sonuçlarını döner ve burdada hata kısımlarını görebiliriz bir alt satırda kullanacağımız ok değeri bize true yada false olarak döner bunuda konsolda görebiliriz. ve dönen değere göre kendimiz bir hata mesajı yazdırabiliriz. programlama zaten otomatik olarak hata throw eder fakat istersek değiştirebiliriz.
                if(!response.ok){
                    throw new Error("ülke bulunamadı");
                }
                return response.json();
            })
            .then((data) => {
                renderCountry(data[0]);
                const countries = data[0].borders;
                
                if(!countries){
                    throw new Error("Komşu ülke bulunamadı")
                }
                return fetch('https://restcountries.com/v3.1/alpha?codes=' + countries.toString())
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                renderNeighbors(data);
            })
            .catch((err) => {
                renderError(err);
            })
}

function renderCountry(data) {
    document.querySelector("#country-details").innerHTML = "";
    document.querySelector("#neighbors").innerHTML = "";

    let html = `
                <div class="col-4">
                    <img src="${data.flags.png}" alt="" class="img-fluid">
                </div>
                <div class="col-8">
                    <h3 class="card-title">${data.name.common}</h3>
                    <hr>
                    <div class ="row">
                        <div class="col-4">Nufüs:</div>
                        <div class="col-8">${(data.population/1000000).toFixed(1)}</div>
                    </div>
                    <div class ="row">
                        <div class="col-4">Resmi Dil:</div>
                        <div class="col-8">${Object.values(data.languages)}</div>
                    </div>
                    <div class ="row">
                        <div class="col-4">Başkent:</div>
                        <div class="col-8">${data.capital[0]}</div>
                    </div>
                    <div class ="row">
                        <div class="col-4">Para Birimi:</div>
                        <div class="col-8">${Object.values(data.currencies)[0].name} ${Object.values(data.currencies)[0].symbol}</div>
                    </div>
                </div>
    `;

    document.querySelector("#details").style.opacity = 1;
    document.querySelector("#country-details").innerHTML =html; 
}


function renderNeighbors(data){
    let html ="";
    for(let country of data){
    html += `
            <div class="col-2 mt-2">
                <div class="card">
                    <img src="${country.flags.png}" class="card-img-top">
                </div>
                <div class="card-body>
                    <h6 class = "card-title">${country.name.common}</h6>
                </div>
            </div>
        `;
    }
    document.querySelector('#neighbors').innerHTML = html;

}

function renderError(err){
    const html = `
        <div class ="alert alert-danger">
            ${err.message}
        </div>
    `;
    setTimeout(() =>{
        document.querySelector("#errors").innerHTML = "";
    },2000),
    document.querySelector("#errors").innerHTML = html;
}



