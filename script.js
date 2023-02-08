class Panier{

    constructor(sousTotalPeches,sousTotalPoires,sousTotalPommes,total){
        this.sousTotalPeches = sousTotalPeches;
        this.sousTotalPoires = sousTotalPoires;
        this.sousTotalPommes = sousTotalPommes;
        this.total = total;
    }
    toString(){
        return `Peches: ${this.sousTotalPeches}\nPoires: ${this.sousTotalPoires}\nPommes: ${this.sousTotalPommes}\nTotal: ${this.total}$`;
    }
}


function Ajuster(fruit) {
    let sousTotalPeches = document.getElementById("sousTotalPeches");
    let sousTotalPoires = document.getElementById("sousTotalPoires");
    let sousTotalPommes = document.getElementById("sousTotalPommes");
    let total = document.getElementById("total");

    const panier = new Panier(sousTotalPeches,sousTotalPoires,sousTotalPommes,total)

    switch (fruit) {
        case "Peches":
            panier.sousTotalPeches.innerHTML = parseInt(document.getElementById("prixPeches").innerText) * document.getElementById("nbPeches").value;
            break;
        case "Poires":
            panier.sousTotalPoires.innerHTML = parseInt(document.getElementById("prixPoires").innerText) * document.getElementById("nbPoires").value;
            break;
        case "Pommes":
            panier.sousTotalPommes.innerHTML = parseInt(document.getElementById("prixPommes").innerText) * document.getElementById("nbPommes").value;
            break;
    }
    panier.total.innerText = +sousTotalPeches.innerHTML + +sousTotalPommes.innerHTML + +sousTotalPoires.innerHTML;


}

function Valider() {
    let totalFruits = +document.getElementById("nbPeches").value + +document.getElementById("nbPoires").value + +document.getElementById("nbPommes").value
    document.getElementById("errorMax").classList.add("invisible");
    document.getElementById("errorValeur").classList.add("invisible");
    if (totalFruits > 24) {
        document.getElementById("errorMax");
        document.getElementById("errorMax").classList.remove("invisible");
        return false;
    }

    if (+document.getElementById("total").innerText < 20) {
        document.getElementById("errorValeur").classList.remove("invisible");
        return false;
    }

    return true;
}
function Reset(){
    document.getElementById("sousTotalPeches").innerText=0;
    document.getElementById("sousTotalPoires").innerText=0;
    document.getElementById("sousTotalPommes").innerText=0;
    document.getElementById("total").innerText=0;
}

addEventListener('reset', ()=> {Reset()})

function afficher(){

    let panier = sessionStorage.getItem("panier");
    document.writeln(panier);


}

