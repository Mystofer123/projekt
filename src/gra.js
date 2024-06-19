const start = document.getElementById("start");

start.addEventListener("click", ()=> {
    const gracz = document.querySelector("#auto");
    const pokazWynik = document.querySelector("#wynik");
    var auto = document.getElementById("gracz");
    var czas = document.getElementById("licznik");
    auto.style.display='block';
  
    let wynik = 0;
    let licznik = 30;

    let interwal = setInterval(function() {
        licznik--;
        czas.innerHTML=licznik;

    }, 1000);
  
    gracz.addEventListener("click", ()=> {
    wynik++;
    pokazWynik.textContent=wynik;
    ruchGracza();
    });
  
    const ruchGracza = ()=> {
        const x = Math.random() * (1150-gracz.clientWidth);
        const y = Math.random() * (250-gracz.clientHeight);
        gracz.style.transform = `translate(${x}px, ${y}px)`;
    }
  
    setTimeout(() =>{
    gracz.removeEventListener("click", ruchGracza());
    alert("Koniec gry. Twój wynik to: "+ wynik);
    }, 30000);
});
