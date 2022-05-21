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

