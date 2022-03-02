
let button = document.querySelectorAll('.box-produk div button')
button.forEach(function(b){
    
    b.addEventListener('click', function(){
      let c =   b.previousElementSibling.textContent;
     window.open(`https://wa.me/6282118391206?text=Hai%20Kak%20Saya%20Mau%20Membeli%20${c}%20`)
    });
})
