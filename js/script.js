let firstName = prompt("Lütfen adınızı girin: ") 
let isim = document.querySelector("#myName") 
let body = document.querySelector(".bg-dark") 


body.style.color = "orange"
body.style.textAlign = "center"
body.style.fontSize = "20px"

isim.innerHTML = `${firstName}`

if (!firstName) {
    body.innerHTML= "Lütfen isim kısmını boş bırakmayın" 
}

