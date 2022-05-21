
let select = document.getElementById('statoOrdine');
let value = select.options[select.selectedIndex].value;

let totale = document.getElementById('totale');
let idCliente = document.getElementById('idCliente');

let formOrdini = document.getElementById('form-ordini');

formOrdini.addEventListener("submit", function (evt) {

    evt.preventDefault();
    
      
    let jsonOrdini = 
      `{"Stato Ordine":"${statoOrdine.value}",
        "Totale Ordine":"${totale.value}",
        "ID Cliente: "${idCliente.value}"
    }`;

    console.log(jsonOrdini);
  
}
);
