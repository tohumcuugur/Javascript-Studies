var models = [{
        name: 'Honda civic',
        image: './img/honda.jpg',
    },
    {
        name: 'Bwm 418d ',
        image: './img/bmw.jpg',
    },
    {
        name: 'Mazda CX-3 ',
        image: './img/mazda.jpg',
    },
    {
        name: 'Skoda Superb',
        image: './img/skoda.jpg',
    },
    {
        name: ' Volvo S60',
        image: './img/volvo.jpg',
    },
]


var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '2000',
    random: false,

}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
    console.log(index);
})
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});


function init(settings) {
    var prev; //we want to prevent create same number again.
    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount) // When we multiply the random number( 0-0.9) by the number of slides(5), it generates up to 5 numbers. We round it to 4 with math floor because index should be maximum 4.
            }
            while (index == prev)//Eşitken sayı üretir değilken üretmez. ilk sayımızı aldık misal 3 ve prev değeri olmadığından yani 3 == prev olmadığından döngüye tekrar girmez. Do döngüsü index == prev olduğu sürece çalışır. Daha sonra 3 == prev oldu. setInterval'da süre sürekli işliyor döngüye tekrar girdik. İndex aldık misal 4 == 3 olmadığı için yeni sayı üretmedi döngü yine sona erdi. Daha sonra yine bir sayı aldı ve 4 == 4 olduğundan do kısmından yeniden sayı aldık.Bu şekilde devam eder.
            prev = index; //in the first tour for an example index is 3 
        } else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1; // slide count is 5 when value<0  5-1 = 4 it goes 4.slide
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-image-top').setAttribute('src', models[index].image);
}