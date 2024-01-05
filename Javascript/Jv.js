/*

Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/


//Svolgimento

// dichiaro l'elemento che ha per classe box
const Container = document.querySelector(".center");

// dichiaro l'elemento che ha per classe ContainerBlock
const ContainerBlock = document.querySelector(".block");

// dichiaro l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// dichiaro l'elemento (bottone) che ha per id check,
const CheckButton = document.getElementById("check");

//creo e inizializzo una variabile globale a zero per tenere traccia del numero massimo di blocchi da inserire
const MaxSquare = 7;

// dichiaro variabile booleana per tener traccia se l'array con i numeri è stato riempito
let aggiunto = false;

// dichiaro variabile array vuoto 
const num = [];


function CreateRandom(MaxSquare) {

    //controllo se l'array con i numeri non è stato riempito
    if (aggiunto == false) {
        console.log(aggiunto);
        //imposto la variabile posizione
        let pos = 0;

        //faccio partire il controllo
        while (pos < MaxSquare) {

            //richiamo funzione random e memorizzo nelle varie posizioni dell'array
            let val1 = Math.floor(Math.random() * 24);

            //controllo che tale valore non sia presente nel mio array 
            if (!num.includes(val1)) {

                //in caso affermativo inserisco il valore
                num[pos] = val1;

                pos++;

            }

        }

        console.log(num);
        //segnalo che l'array è stato riempito
        aggiunto = true;
    }
    else console.log("ok");

}

//funzione per la creazione/inserimento in pagina dei numeri random
function CreateHtml(val1, val2) {

    for (let i = 0; i < num.length; i++) {

        //Creo l'elemento all'interno del mio file html
        const square = document.createElement(val1);

        //Creo l'elemento all'interno del mio file html
        const number = document.createElement("h1");

        //inserisco numero all'interno del mio tag h1
        number.append(num[i]);

        //inserisco numero all'interno del quadrato il tag h1
        square.append(number);

        //aggiungo la classe desiderata
        square.classList.add(val2);

        //inserisco ogni blocco all'inerno del mio container
        ContainerBlock.append(square);


    }


}

//funzione che "nasconde" i blocchi con i numeri (in realtà li elimina dalla pagina)
function hideHtml() {


    //acquisisco i valore nel tag p(qualora ci fosse)
    const number = document.querySelector('.block .Box');

    //Verifico che c'è
    if (number != null) {

        //fino a quando nel container ci saranno box
        while (ContainerBlock.firstChild) {

            //elimina ogni figlio box
            ContainerBlock.removeChild(ContainerBlock.firstChild);
        }

    }

    //risetto la variabile a false in modo da poter riempire di nuovo l'array
    aggiunto = false;

    document.getElementById("chek").style = "display:block";

    //disabilito i tag a di tutti i blocchi in griglia
    CreateButton.style = "pointer-events: auto";

}


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",
    () => {

        CreateRandom(MaxSquare);

        //chiamo funzione per la creazione dei blocchi html in pagina
        CreateHtml('div', 'Box');

        //setto contatore a 3 secondi
        setTimeout(hideHtml, 3000);

        //disabilito i tag a di tutti i blocchi in griglia
        CreateButton.style = "pointer-events: none";


    }

);




function chekVal() {

    //acquisisco i valore nel tag p(qualora ci fosse)
    const number = document.querySelector('.block p');

    //Verifico che c'è
    if (number != null) {

        number.remove();

    }

    const ValUser = document.getElementsByClassName('val');

    let nErr = 0;

    for (let i = 0; i < ValUser.length; i++) {

        //acquisisco i valori dai vari tag num e li converto in numeri interi
        let val = parseInt(ValUser[i].value);

        if (!num.includes(val)) {

            nErr++;
        }

    }

    if (nErr != 0) {

        //Creo l'elemento all'interno del mio file html
        const stringa = document.createElement("p");

        //inserisco scritta all'interno del mio contenuto
        stringa.append("Alcuni valori inseriti non sono corretti");

        //inserisco stringa all'interno del mio contenitore "none"
        ContainerBlock.append(stringa);

    }

    else {

        //Creo l'elemento all'interno del mio file html
        const stringa = document.createElement("p");

        //inserisco scritta all'interno del mio contenuto
        stringa.append("Bravo hai vinto!");

        //inserisco stringa all'interno del mio contenitore "none"
        ContainerBlock.append(stringa);
    }




}


// Quando viene cliccato il pulsante verifica
CheckButton.addEventListener("click",
    () => {

        chekVal();

        //setto contatore a 3 secondi
        setTimeout(hideHtml, 3000);

    }

);