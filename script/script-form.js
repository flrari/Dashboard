let nome = document.getElementById('nome');
let cognome = document.getElementById('cognome');
let email = document.getElementById('email');
let password = document.getElementById('password');
let indirizzo = document.getElementById('indirizzo');

let formClienti = document.getElementById('form-clienti');

formClienti.addEventListener("submit", function (evt) {

    evt.preventDefault();
    
      
    let jsonClienti = 
      `{"Nome":"${nome.value}",
        "Cognome":"${cognome.value}",
        "Email: "${email.value}",
        "Password": "${password.value}",
        "Indirizzo": "${indirizzo.value}"
    }`;

    console.log(jsonClienti);
  
}
);


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
