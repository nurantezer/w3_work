const islem = (p1,p2) => (p1+p2);
document.getElementById("demo").innerHTML = islem(4,3);

//*DECLARATİON
function myFunction(a1,a2) {
    return a1 * a2;
}
document.getElementById("demo").innerHTML = myFunction(5,6)

//*eXPRESSİON
const myIslem = function(k1,k2){
return k1 - k2
}
document.getElementById("demo").innerHTML = myIslem(80,15)

document.getElementById("demo").innerHTML = islem(7,8);

const toCelsius = (f) => (5/9) * (f-32);
document.getElementById("demo").innerHTML = toCelsius(77)
document.getElementById("demo").innerHTML = `${toCelsius} dir`

const printHello = () => ("hello");
document.getElementById("demo").innerHTML = printHello()

//*expression
const x = function (a,b){
    return a * b
}
document.getElementById("demo").innerHTML = x(4,9)
//*Yukarıdaki işlev aslında anonymous function (adsız bir fonksiyon). 
//*Değişkenlerde depolanan fonksiyonlar, fonksiyon adlarına ihtiyaç duymaz. 
//*Her zaman değişken adı kullanılarak çağrılır (çağrılır).
const myFonc = (x,y) => {
    if( y === undefined){
        y = 2;
    }
    return x*y;
}
document.getElementById("demo").innerHTML = myFonc(4)
