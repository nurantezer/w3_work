const btn = document.querySelector(".btn")
const print = document.querySelector(".yazdir")

btn.addEventListener("click", function(){
    document.getElementById("demo").textContent = Date()
    console.log(btn);
})

btn.addEventListener("click", function(){
    document.getElementById("font").style.fontSize = '35px'
})

btn.addEventListener("click", function(){
    document.getElementById("kaybol").style.display = 'none'
})

btn.addEventListener("click", function(){
    document.getElementById("görün").style.display = 'block'
})

//*Bu şekilde de yazdırabilirm.Bir HTML belgesi yüklendikten sonra document.write() 
//*işlevini kullanmak, mevcut tüm HTML'yi siler:Document.write() yöntemi 
//*yalnızca test için kullanılmalıdır.
document.write(5+6);

btn.addEventListener("click", function(){
    document.write(8+9)
})

//*Verileri görüntülemek için bir uyarı kutusu(alert) kullanabilirsiniz:

// window.alert(5+5);

//*Pencere anahtar kelimesini atlayabilirsiniz.
 //*JavaScript'te pencere nesnesi, genel kapsam nesnesidir. 
 //*Bu, değişkenlerin, özelliklerin ve yöntemlerin varsayılan 
 //*olarak pencere nesnesine ait olduğu anlamına gelir. Bu ayrıca, pencere 
//*anahtar sözcüğünü belirtmenin isteğe bağlı olduğu anlamına gelir:

// alert(5+8);

//*Hata ayıklama amacıyla, verileri görüntülemek için tarayıcıda
//* console.log() yöntemini çağırabilirsiniz.

console.log(5+7);
//*JavaScript'te herhangi bir yazdırma nesnesi veya yazdırma 
//*yöntemi yoktur. Çıkış cihazlarına JavaScript'ten erişemezsiniz. 
//*Bunun tek istisnası, geçerli pencerenin içeriğini yazdırmak 
//*için tarayıcıda window.print() yöntemini çağırabilmenizdir.

print.addEventListener("click", function(){
    window.print()
})