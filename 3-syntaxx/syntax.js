//*JavaScript sözdizimi, JavaScript programlarının nasıl oluşturulduğuyla ilgili kurallar dizisidir:
//* Değişkenler nasıl oluşturulur:
//! var x;
//! let y;
//* Değişkenler nasıl kullanılır:
//! x = 5;
//! y = 6;
//! let z = x + y;
//*JavaScript Values-JavaScript Değerleri-
//*JavaScript sözdizimi iki tür değer tanımlar: 
//! Sabit değerler -Fixed values
// !Değişken değerler - Variable values
//*Sabit değerler için en önemli iki söz dizimi kuralı şunlardır:
//!1. Number ondalıklı veya ondalıksız yazılır: 10.50   1001
//!2. Strings, çift veya tek tırnak içinde yazılan metinlerdir: "John Doe" 'John Doe'

//*JavaScript Variables -JavaScript Değişkenleri
//*Bir programlama dilinde, değişkenler veri değerlerini depolamak için kullanılır. 
//*JavaScript, değişkenleri bildirmek için var, let ve const anahtar sözcüklerini kullanır. 
//*Değişkenlere değer atamak için eşittir işareti kullanılır. 
//*Bu örnekte, x bir değişken(variable) olarak tanımlanmıştır. Ardından, x'e 6 değeri(value) atanır (verilir):
let x;
x = 6;
document.getElementById("demo").innerHTML = x;

//* JavaScript Operators -JavaScript Operatörleri-
//* JavaScript, değerleri hesaplamak için aritmetik operatörleri ( + - * / ) kullanır:
document.getElementById("demo").innerHTML = (5+6)*10

//* JavaScript, değişkenlere değer atamak için bir atama işleci ( = ) kullanır:
let a, b;
a = 6;
b = 10;
document.getElementById("demo").innerHTML = a + b;
document.getElementById("demo").innerHTML = "Ali" + " " + "Yılmaz"

//*JavaScript Keywords -Javascript Anahtar Kelimeleri
//! var,let,const

//! JavaScript Comments
// x = 5;

//*Javascripte değişkenlerin başında harf, $, _ olabilir ama rakam olamaz.

//*Javascript Büyük, küçük harfe duyarlıdır.(Case Sensetive)
let lastname , lastName;
lastName = "Sayın";
lastname = "Özer";
document.getElementById("demo").innerHTML = lastName;

