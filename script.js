window.addEventListener("load", () => {
  let dodaj = document.getElementById("add");
  let izbrisi = document.getElementById("remove");
  let tekst = document.getElementById("tekst");
  let itemi = document.getElementById("itemi");

  dodaj.addEventListener("click", dodajDiv);

  izbrisi.addEventListener("click", izbrisiDivs);

  function izbrisiDivs() {
    console.log("brisem....");
    itemi.querySelectorAll(".itemi").forEach((item) => {
      item.remove();
    });
  }

  function dodajDiv() {
    if (tekst.value === "") return;
    var uneseni = tekst.value;

    var novi = document.createElement("div");
    novi.className = "itemi";
    novi.innerHTML = uneseni;

    itemi.appendChild(novi);
    tekst.value = "";
    tekst.setAttribute("placeholder", "Enter new technology...");
  }
});
