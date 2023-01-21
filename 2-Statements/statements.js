//*Bir JavaScript programı , bir bilgisayar tarafından yürütülecek 
//*ifadelerin(statement) bir listesidir .JavaScript programlarına (ve JavaScript ifadelerine)
//* genellikle JavaScript kodu denir.
let x,y,z ;
x = 7;
y = 6;
z= x+y;
document.getElementById("demo").innerHTML = ` z nin değeri ${z} dir `

//*Web'de, noktalı virgülsüz örnekler görebilirsiniz. İfadeleri noktalı virgülle bitirmek zorunlu değildir, 
//*ancak önemle tavsiye edilir.
//*Noktalı virgülle ayrıldığında, bir satırda birden fazla ifadeye izin verilir:
//*a = 5; b = 6; c = a + b;

//*JavaScript, birden çok boşluğu yok sayar. Komut dosyanızı daha okunaklı hale getirmek için beyaz boşluk ekleyebilirsiniz. 
//*Aşağıdaki satırlar eşdeğerdir:
// let person = "Hege";
// let person ="Hege";

//*İyi bir uygulama, işleçlerin(operators) etrafına boşluk koymaktır ( = + - * / ):
// let x = y + z;

//*Bir JavaScript ifadesi(statement) bir satıra sığmazsa, onu kesmek için en iyi yer bir işleçten(operators) sonradır:
// document.getElementById("demo").innerHTML = 
// "Hello Dolly!";

//*JavaScript Kod Blokları JavaScript ifadeleri, süslü parantezler(curly brakets) {...} içinde kod blokları halinde gruplandırılabilir. Kod bloklarının amacı, birlikte yürütülecek ifadeleri tanımlamaktır. Bloklar halinde gruplanmış ifadeleri bulacağınız yerlerden biri, JavaScript işlevlerindedir(function): bir örnek

const btn = document.querySelector(".btn")
const demo1 = document.getElementById("demo1")
const demo2 = document.getElementById("demo2")

btn.addEventListener("click", function(){
    document.getElementById("demo1").textContent = "Merhaba"
    document.getElementById("demo2").textContent = "Nasılsın?"
})

//*JavaScript anahtar sözcükleri ayrılmış sözcüklerdir. Ayrılmış kelimeler değişkenler için isim olarak kullanılamaz.
//* var, let, const, if, switch, for, functıon, return, try