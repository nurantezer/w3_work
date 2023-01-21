//*JavaScript Değişkeni Bildirmenin 4 Yolu: var, let, const, hiçbirşey
//*Var anahtar sözcüğü, 1995'ten 2015'e kadar tüm JavaScript kodunda kullanılmıştır. Let ve const anahtar kelimeleri 2015 yılında JavaScript'e eklendi. 
//*Kodunuzun eski tarayıcılarda çalışmasını istiyorsanız, var kullanmanız gerekir.
//*Değişkenler nedir? Değişkenler, verileri depolamak (veri değerlerini depolamak) için kaplardır.
//*Bu örnekte, x, y ve z, let anahtar sözcüğüyle bildirilen değişkenlerdir:
let x = 8;
let y =10;
let z = x+y;
document.getElementById("demo").innerHTML = "Z'nin değeri :" + z; 

//* Bu örnekte x, y ve z bildirilmemiş değişkenlerdir:
//* x = 8;
//* y = 10;
//* z = x + y;

//*Yukarıdaki tüm örneklerden tahmin edebilirsiniz: 
//*x, 8 değerini saklar y, 10 değerini saklar z, 18 değerini saklar

//* JavaScript const ne zaman kullanılır?
//*Genel bir kural istiyorsanız: değişkenleri her zaman const ile bildirin. Değişkenin değerinin değişebileceğini düşünüyorsanız let'i kullanın. 
//*Bu örnekte, fiyat1, fiyat2 ve toplam değişkenlerdir:
const fiyat1 = 8;
const fiyat2 = 12;
let toplam = fiyat1 + fiyat2;

document.getElementById("demo").innerHTML = "Toplam fiyat:" + toplam;

//*İki değişken price1 ve price2 const anahtar sözcüğü ile bildirilir. 
//*Bunlar sabit değerlerdir ve değiştirilemezler. 
//*total değişkeni let anahtar sözcüğü ile bildirilir. Bu değiştirilebilen bir değerdir.
//!Not Değişkenler, değerleri depolamak için kaplardır.

//*JavaScript Identifiers -Javascript Tanımlayıcıları-
//*Tüm JavaScript değişkenleri benzersiz adlarla tanımlanmalıdır. Bu benzersiz adlara tanımlayıcı denir. 
//*Tanımlayıcılar kısa adlar (x ve y gibi) veya daha açıklayıcı adlar (yaş, toplam, toplam Hacim) olabilir. 
//*Değişkenler (benzersiz tanımlayıcılar) için adlar oluşturmak için genel kurallar şunlardır:
//*Adlar harf, rakam, alt çizgi ve dolar işareti içerebilir. İsimler bir harfle başlamalıdır. 
//*Adlar ayrıca $ ve _ ile başlayabilir (ancak bu eğitimde kullanmayacağız). 
//*Adlar büyük/küçük harfe duyarlıdır (y ve Y farklı değişkenlerdir).
//* Ayrılmış sözcükler (JavaScript anahtar sözcükleri gibi) ad olarak kullanılamaz.
 //!Not JavaScript tanımlayıcıları büyük/küçük harfe duyarlıdır.

//*  The Assignment Operator -Atama Operatörü-
//*avaScript'te, eşittir işareti (=) bir "atama" işlecidir, "eşittir" işleci değil. 
//* Bu cebirden farklıdır. Aşağıdakiler cebirde bir anlam ifade etmez:
//*x = x + 5 
//* Ancak JavaScript'te bu çok mantıklıdır: x'e x + 5 değerini atar. 
//* (x + 5'in değerini hesaplar ve sonucu x'e koyar. x'in değeri 5 artırılır.)
//!Not JavaScript'te "eşittir" operatörü == gibi yazılır.

//* JavaScript Data Types -JavaScript Veri Türleri-
//*JavaScript değişkenleri 100 gibi sayıları ve "John Doe" gibi metin değerlerini tutabilir. 
//*Programlamada, metin değerlerine metin dizileri denir. JavaScript birçok veri türünü işleyebilir, 
//*ancak şimdilik yalnızca sayıları ve dizeleri düşünün. Dizeler çift veya tek tırnak içinde yazılır. 
//*Rakamlar tırnaksız yazılır. 
//*Bir sayıyı tırnak içine alırsanız, bir metin dizesi olarak değerlendirilir.
// Example;
// const pi = 3.14;
// let person = "John Doe";
// let answer = "Yes I am!";

//* Declaring a JavaScript Variable -Bir Javascript Değişkeni Bildirmek
//*JavaScript'te bir değişken oluşturmak, bir değişkeni "bildirmek" olarak adlandırılır.
//*varveya letanahtar sözcüğüyle bir JavaScript değişkeni bildirirsiniz:
// var carName;
// let carName;
//*Bildirimden sonra değişkenin değeri yoktur (teknik olarak öyledir undefined).

//*Değişkene bir değer atamak için eşittir işaretini kullanın:

//carName = "Volvo";
//*Değişkeni bildirirken değişkene bir değer de atayabilirsiniz:

//let carName = "Volvo";
//*Aşağıdaki örnekte, adında bir değişken oluşturuyoruz carNameve ona "Volvo" değerini atadık.

//*Ardından, id="demo" ile bir HTML paragrafının içindeki değeri "çıktılıyoruz":
// let carName = "Volvo";
// document.getElementById("demo1").innerHTML = carName;
//! Not Bir betiğin başında tüm değişkenleri bildirmek iyi bir programlama uygulamasıdır.
//* Bir ifadede birçok değişken bildirebilirsiniz. İfadeyi let ile başlatın ve değişkenleri virgülle ayırın:
// let person = "John Doe", carName = "Volvo", price = 200;
// document.getElementById("demo").innerHTML = carName;
//*Bir bildirim birden çok satıra yayılabilir:
// let person = "John Doe",
//   carName = "Volvo",
//   price = 200;

//*Value = undefined
//*Bilgisayar programlarında, değişkenler genellikle bir değer olmadan bildirilir. Değer, hesaplanması gereken bir şey veya kullanıcı girişi gibi daha sonra sağlanacak bir şey olabilir.

//*Değer olmadan bildirilen bir değişken, değerine sahip olacaktır undefined.

//*carName değişkeni undefined, bu ifadenin yürütülmesinden sonra bir değere sahip olacaktır:

// 

//*let,const, var farkına değin!!!
//*JavaScript Aritmetiği
//*=Cebirde olduğu gibi, ve gibi işleçleri kullanarak JavaScript değişkenleriyle aritmetik işlem yapabilirsiniz +:

// Örnek
// let x = 5 + 2 + 3;
//*Dizeler de ekleyebilirsiniz, ancak dizeler birleştirilir:

// Örnek
// let x = "John" + " " + "Doe";
//*Ayrıca şunu deneyin:

// Örnek
// let x = "5" + 2 + 3;
//!NotBir sayıyı tırnak içine alırsanız, sayıların geri kalanı dizeler olarak ele alınır ve birleştirilir.
//*Dolar işaretini kullanmak JavaScript'te pek yaygın değildir, ancak profesyonel programcılar bunu genellikle bir JavaScript kitaplığında ana işlevin takma adı olarak kullanır.

//*Örneğin jQuery JavaScript kitaplığında, ana işlev $HTML öğelerini seçmek için kullanılır. 
//*JQuery'de $("p");"tüm p öğelerini seç" anlamına gelir.
// let $ = "Hello World";
// let $$$ = 2;
// let $myMoney = 5;
//*Alt çizgi kullanmak, JavaScript'te çok yaygın değildir, ancak profesyonel programcılar arasındaki bir gelenek, 
//*onu "özel (gizli)" değişkenler için takma ad olarak kullanmaktır.
// let _lastName = "Johnson";
// let _x = 2;
// let _100 = 5;

