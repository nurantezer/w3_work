//* JavaScript Let
//*Anahtar kelime ES6'da (2015)let tanıtıldı .

//*ile tanımlanan değişkenler letYeniden Bildirilemez.

//*ile tanımlanan değişkenler letkullanılmadan önce Bildirilmelidir.

//*ile tanımlanan değişkenlerin letBlok Kapsamı vardır.

//*Yeniden ilan edilemez
///*ile tanımlanan değişkenler letyeniden bildirilemez .

//*Yanlışlıkla bir değişkeni yeniden tanımlayamazsınız.

//*Seninle letbunu yapamazsın:

//* Örnek
// let x = "John Doe";

// let x = 0;

//! SyntaxError: 'x' has already been declared
//* Sizinle var şunları yapabilirsiniz:

// Örnek
// var x = "John Doe";

// var x = 0;

//*Anahtar kelime ES6'da (2015)let tanıtıldı .

//*ile tanımlanan değişkenler letYeniden Bildirilemez.

//*ile tanımlanan değişkenler letkullanılmadan önce Bildirilmelidir.

//*ile tanımlanan değişkenlerin letBlok Kapsamı vardır.

//*Yeniden ilan edilemez
//*ile tanımlanan değişkenler letyeniden bildirilemez .

//*Yanlışlıkla bir değişkeni yeniden tanımlayamazsınız.

//*Seninle letbunu yapamazsın:

// örnek
// let x = "John Doe";

// let x = 0;

// SyntaxError: 'x' has already been declared
// *Sizinle varşunları yapabilirsiniz:

//* Örnek
// var x = "John Doe";

// var x = 0;

//* Block Scope
//*Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
//*ES6, iki önemli yeni JavaScript anahtar sözcüğünü kullanıma sundu: let ve const.

//*Bu iki anahtar kelime , JavaScript'te Blok Kapsamı sağlar.

//*Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilemez:

// Örnek
{
  let x = 2;
}
// x can NOT be used here
//*Anahtar kelime ile bildirilen değişkenler varblok kapsamına sahip OLAMAZ.

//*Bir { } bloğu içinde bildirilen değişkenlere bloğun dışından erişilebilir.

// Örnek
{
  var x = 2;
}
// x CAN be used here

//* Redeclaring Variables -Değişkenleri Yeniden Bildirmek-
//*varAnahtar kelimeyi kullanarak bir değişkeni yeniden bildirmek sorunlara neden olabilir.

//*Bir blok içindeki bir değişkeni yeniden bildirmek, değişkeni bloğun dışında da yeniden bildirir:
var  a = 10;
// Here a is 10

{  
var a = 2;
// Here a is 2
}

// Here a is 2
document.getElementById("demo").innerHTML = a;

//*Anahtar kelimeyi kullanarak bir değişkeni yeniden bildirmek letbu sorunu çözebilir.

//*Bir bloğun içindeki bir değişkeni yeniden bildirmek, değişkeni bloğun dışında yeniden tanımlamaz:

// Örnek
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
//!let anahtar sözcüğü Internet Explorer 11 veya önceki sürümlerde tam olarak desteklenmez.

//* Redeclaring -Yeniden Beyan-
//*Bir JavaScript değişkeninin şununla yeniden bildirilmesine varbir programın herhangi bir yerinde izin verilir:

//* Örnek
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
//*ile let, aynı blokta bir değişkenin yeniden bildirilmesine izin VERİLMEZ:

//*Örnek
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}
//* , ile bir değişkeni letbaşka bir blokta yeniden bildirmek, izin verilir:

//* Örnek
let x = 2;   // Allowed

{
let x = 3;   // Allowed
}

{
let x = 4;    // Allowed
}

//* Let Hoisting -Kaldırmaya İzin Ver-
//*varile tanımlanan değişkenler en üste kaldırılır ve herhangi bir zamanda başlatılabilir.

//*Anlamı: Değişkeni bildirilmeden önce kullanabilirsiniz:

//* Örnek
//* Tamamdır:

carName = "Volvo";
var carName;
//*Kaldırma hakkında daha fazla bilgi edinmek istiyorsanız, JavaScript Kaldırma bölümünü inceleyin .

//*let ile tanımlanan değişkenler letde bloğun üstüne kaldırılır, ancak başlatılmaz.

//*Anlamı: Bir letdeğişkeni bildirilmeden önce kullanmak, şuna neden olur ReferenceError:
try {
  carName = "Saab";
  let carName = "Volvo";
} catch (err) {
  document.getElementById("demo").innerHTML = err;
}