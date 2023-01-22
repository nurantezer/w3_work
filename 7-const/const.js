//* JavaScript Const
///*Anahtar kelime ES6'da (2015)const tanıtıldı .

//*constile tanımlanan değişkenler Yeniden Bildirilemez.

//*constile tanımlanan değişkenler Yeniden atanamaz.

//*constile tanımlanan değişkenlerin Blok Kapsamı vardır.

//* Cannot be Reassigned -Yeniden Atanamaz-
//* Bir constdeğişken yeniden atanamaz:

//* Örnek
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
//* Atanmalıdır
//* JavaScript constdeğişkenlerine bildirildiklerinde bir değer atanmalıdır:

//* Doğru
const PI = 3.14159265359;
//* Yanlış
const PI;
PI = 3.14159265359;
//*JavaScript const ne zaman kullanılır?
//*constDeğerin değiştirilmemesi gerektiğini bildiğiniz zaman, her zaman ile bir değişken bildirin.

//*constŞunları beyan ettiğinizde kullanın :

//* A new Array
//* A new Object
//* A new Function
//* A new RegExp

//*Sabit Nesneler ve Diziler
//*Anahtar kelime constbiraz yanıltıcı.

//*Sabit bir değer tanımlamaz. Bir değere sabit bir başvuru tanımlar.

//*Bu nedenle şunları YAPAMAZSINIZ:

//*Sabit bir değeri yeniden atama
//*Sabit bir diziyi yeniden atama
//*Sabit bir nesneyi yeniden atama
//*Ama sen yapabilirsin:

//*Sabit dizinin öğelerini değiştirin
//*Sabit nesnenin özelliklerini değiştirme

//* Constant Arrays -Sabit Diziler-
//* Bir sabit dizinin öğelerini değiştirebilirsiniz:
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; 

//* Ancak diziyi yeniden atayamazsınız:
try {
  const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Toyota", "Volvo", "Audi"];
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}

//* Constant Objects -Sabit Nesneler
//*Sabit bir nesnenin özelliklerini değiştirebilirsiniz:
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo").innerHTML = "Car owner is " + car.owner; 
//*Ancak nesneyi yeniden atayamazsınız:
try {
  const car = {type:"Fiat", model:"500", color:"white"};
  car = {type:"Volvo", model:"EX60", color:"red"};
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
//!Anahtar constsözcük, Internet Explorer'da tam olarak desteklenmemektedir.

//*Block Scope
//*Bir değişkeni const ile bildirmek, Block Scope söz konusu olduğunda let'e benzer.
//*Bu örnekte blokta bildirilen x, bloğun dışında bildirilen x ile aynı değildir:
const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}

// Here x is 10

//*Redeclaring-Yeniden Beyan
//*Bir programın herhangi bir yerinde bir JavaScript var değişkeninin yeniden bildirilmesine izin verilir:
var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
//*Aynı kapsamda mevcut bir var veya let değişkeninin const olarak yeniden bildirilmesine izin verilmez:var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
//*Aynı kapsamda(scope) mevcut bir const değişkeninin yeniden atanmasına izin verilmez:
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
//*Bir değişkenin başka bir kapsamda veya başka bir blokta const ile yeniden bildirilmesine izin verilir:
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

//* Hoisting-Kaldırma
//*var ile tanımlanan değişkenler en üste kaldırılır ve herhangi bir zamanda başlatılabilir.
//*Anlamı: Değişkeni bildirilmeden önce kullanabilirsiniz:
This is OK:

carName = "Volvo";
var carName;
//*const ile tanımlanan değişkenler de en üste kaldırılır, ancak başlatılmaz. 
//*Anlamı: Bildirilmeden önce bir const değişkeni kullanmak, bir ReferenceError ile sonuçlanacaktır:
try {
  alert(carName);
  const carName = "Volvo";
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}