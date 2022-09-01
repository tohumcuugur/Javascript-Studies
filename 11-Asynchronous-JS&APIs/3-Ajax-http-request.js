//api bir servistir ve backend programlama dili ile geliştirilir. Nodejs ortamında js dili ile geliştirilebilir.Bir servis bize bir veri sağlayan program olarak düşünebilir.Misal canlı döviz kuru gösteren bir servise veya hava durumu verilerini içeren bir servise http talebi gönderilerek veriler alınabilir.
//AJAX javascript' uygulamasından servise bir talep göndermeye ajax(Asynchronous JavaScript and XML) denir.
//XML  Eğer HTML veriyi göstermek için tasarlandıysa, XML veriyi kapsamak ve taşımak için tasarlanmıştır.
//Hem JavaScript, hem de XML AJAX’da eşzamanlı olmadan çalışır.AJAX kullanan herhangi bir web uygulaması tüm sayfayı yenileme ihtiyacı olmadan veri yollayabilir ve alabilir.
//XML , yerine JSON'da kullanılabilir.JSON son zamanlarda daha popülerdir.

function displayCountry(country){
    const request = new XMLHttpRequest();
    request.open('GET','https://restcountries.com/v3.1/name/'+ country); // POST ilede bilgi kaydı yapılır.
    request.send();


//asynchronous

    request.addEventListener('load' , function () {
    // const data = this.responseText;
    // console.log(data);
    // console.log(typeof data); //string olarak dönüş yaptığı için console.log(data[0]) elemanı şeklinde dönüş alamayız. Bizim elimizde dizi şeklinde olması gerekiyor bu noktada JSON kullanmaya ihtiyacımız oluyor.

    //string to JSON
    const data = JSON.parse(this.responseText); // obje yapısına dönüştürmüş olduk.
    console.log(typeof data); // object
    console.log(data);
    setCountry(data[0]);
});
}

function setCountry(data) {
    // console.log(data);
    const html = `
    <div class="col-3 mt-5">
        <div class="card h-100">
            <img src="${data.flags.png}" class="card-img-top">
            <div class="card-body">
            <h5 class = "card-title">${data.name.common}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class = "list-group-item">Population : ${(data.population/1000000).toFixed(1)} Million</li>
                <li class = "list-group-item">Capital : ${data.capital[0]}</li>
                <li class = "list-group-item">Language : ${Object.values(data.languages)}</li>
                <li class = "list-group-item">Currencies : ${Object.values(data.currencies.TRY)}</li>
            </ul>


        </div>
    </div>
    `

    document.querySelector(".container .row").insertAdjacentHTML('beforeend' , html);
}

displayCountry("turkey");


