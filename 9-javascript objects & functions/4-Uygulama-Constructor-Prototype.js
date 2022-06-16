/*
  Demo : Creating Objects
  -Dışarıdan name ve salary bilgilerini alan employee constructor'ı tanımayınız.
  -Yıl içinde o ana kadar alınan toplam maaş ve alınana toplam vergi tutarını hesaplayan fonsksiyonu oluşturun.

      --Vergi Dilimleri
        **20.000'e kadar %20 vergi
        **30.000'e kadar %25 vergi
        **30.000'den sonra %30 vergi

        Neden prototip?
        Metot ekleme işlemini kurucu içerisinde yapabildiğimiz halde neden prototype kullanalım sorusu aklınıza gelebilir.
        Tüm JavaScript değerleri bir nesnedir.Bir nesne, nesne kurucu ile oluşturulduğunda JavaScript belleğe nesne kurucusuna ait tüm özellik ve metotların bir kopyasını oluşturur. 
        Nesne kurucusu içerisinde 10 fonksiyon olsun.
        Nesne kurucusu ile 1000 adet nesne kopyası oluşturulsun.
        Bellek kullanımı ne kadar da fazla oldu. (10000)
        Ancak prototype ile yazılan fonksiyonların kopyası oluşturulmaz sadece referansı tutulur.
        Her kopyalanan nesne içerisinde prototype nesnesinin referansı tutularak fonksiyona erişilir.
*/

function employee(name,salary){
  if(!(this instanceof employee)){ //eğer employeeden türüyen nesne employee türü değilse(new anahtar sözcüğü yoksa new anahtar sözcüğü kendimiz oluşturalım)
    return new employee(name,salary);
  }
  this.name = name;
  this.salary = salary;
}

employee.prototype.calculateSalary = function(){
  var month = new Date().getMonth()+1;
  //console.log(month);
  var tax = 0;
  var total = this.salary*month
  if(total <= 20000){
    tax = total*0.2;
  }else if(total > 20000 && total <=3000){
    tax = total*0.25;
  }else{
    tax = total*0.3;
  }
  return{
    tax : tax,
    paid : total - tax,
  }

};

var emp1 = employee('Uğur',3000);
//console.log(emp1);
//console.log(emp1.calculateSalary());
var emp1_salary = emp1.calculateSalary();
console.log(`${emp1.name} isimli personel ${emp1_salary.tax} tl vergi kesintisi ile ${emp1_salary.paid} tl maaş almıştır.`);

var emp2 = new employee('Utku',3300);
// console.log(emp2);
//console.log(emp2.calculateSalary());
var emp2_salary = emp2.calculateSalary();
console.log(`${emp2.name} isimli personel ${emp2_salary.tax} tl vergi kesintisi ile ${emp2_salary.paid} tl maaş almıştır.`);




