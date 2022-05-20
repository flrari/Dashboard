
let search = document.getElementById("search");
let login = document.getElementById("login");
let inserisciCliente = document.getElementById("inserisciCliente");
let rimuoviCliente = document.getElementById("rimuoviCliente");
let filtraperID = document.getElementById("filtraperID");
let trash = document.getElementById("delete");
let inserisciOrdine = document.getElementById("inserisciOrdine");
let rimuoviOrdine = document.getElementById("rimuoviOrdine");
let listaOrdini = document.getElementById("listaOrdini");
let filtraperOrdine = document.getElementById("filtraperOrdine");
let filtraperCliente = document.getElementById("filtraperCliente");

function selects(){  
    let ele=document.getElementsByName('checkbox');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=true;  
    }  
}  
function deSelect(){  
    var ele=document.getElementsByName('checkbox');  
    for(var i=0; i<ele.length; i++){  
        if(ele[i].type=='checkbox')  
            ele[i].checked=false;  
          
    }  
}     

console.log("Script inizializzato");

//search.addEventListener("click", window.alert(search.id));
//login.addEventListener("click", window.alert(login.id));
//inserisciCliente.addEventListener("click", window.alert(inserisciCliente.id));
//rimuoviCliente.addEventListener("click", window.alert(rimuoviCliente.id));
//filtraperID.addEventListener("click", window.alert(filtraperID.id));
//trash.addEventListener("click", window.alert(trash.id));
//inserisciOrdine.addEventListener("click", window.alert(inserisciOrdine.id));
//rimuoviOrdine.addEventListener("click", window.alert(rimuoviOrdine.id));
//listaOrdini.addEventListener("click", window.alert(listaOrdini.id));
//filtraperOrdine.addEventListener("click", window.alert(filtraperOrdine.id));
//filtraperCliente..addEventListener("click", window.alert(filtraperCliente.id));

window.addEventListener("load", () => {

        //chiamo Postman
        const base = "https://d765-87-8-204-239.eu.ngrok.io/cliente/lista";
        
        fetch(base)
        
            .then((response) => {
            return console.log(response);
            })
                
            });


          

