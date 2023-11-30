/*

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/


//Svolgimento

// dichiaro l'elemento che ha per classe box
const Container = document.querySelector(".containerCenter");

// dichiaro l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// dichiaro l'elemento (bottone) che ha per id play,
const DeleteButton = document.getElementById("del");

//creo e inizializzo una variabile globale a zero per i numeri all'interno dei blocchi
var num = 0;

//creo e inizializzo una variabile globale a zero per tenere traccia del numero massimo di blocchi da inserire
const MaxSquare = 7;

// dichiaro variabile booleana per tener traccia se l'array con i numeri è stato riempito
let aggiunto = false;




function CreateRandom(MaxSquare) {

    // dichiaro variabile array vuoto 
    const num = [];

    //controllo se l'array  con i numeri delle bombe non è stato riempito
    if(aggiunto == false){

        //imposto la variabile posizione
        let pos = 0;

        //faccio partire il controllo
        while(num.length < MaxSquare){

             //richiamo funzione random e memorizzo nelle varie posizioni dell'array
             let val1 = Math.floor(Math.random() * 24);

             //controllo che tale valore non sia presente nel mio array bomb
             if(!num.includes(val1)){
            
                 //in caso affermativo inserisco il valore
                 num [pos] = val1;

                 pos++;

             }

        }

        console.log(num);
        //segnalo che l'array è stato riempito
        aggiunto = true;
    }

    return num;

}

//funzione per la creazione/inserimento in pagina dei numeri random
function CreateHtml(val1,val2,num) {

    const array = num;

    for(let i= 0; i<array.length;i++){

    //Creo l'elemento all'interno del mio file html
    const square = document.createElement (val1);

    //Creo l'elemento all'interno del mio file html
    const number = document.createElement ("h1");

    //inserisco numero all'interno del mio tag h1
    number.append(i);

    //inserisco numero all'interno del quadrato il tag h1
    square.append(number);
    
    //aggiungo la classe desiderata
    square.classList.add(val2);

    //inserisco ogni blocco all'inerno del mio container
    Container.append(square);


    }


}

//funzione che nasconde i numeri
function hideHtml() {

   
    const items = document.getElementsByClassName ('Box');

    console.log(items);
                        
    for(let i= 0; i<=items.length; i++){
      
        items[i].classList.add("hide");

    }
}


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",
        () => {
            
            const num = CreateRandom(MaxSquare);

            //
            CreateHtml('div','Box',num);

            //setto contatore a 3 secondi
            setTimeout(hideHtml,3000);

        
        }

);
