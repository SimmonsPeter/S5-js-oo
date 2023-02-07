function Ajuster(fruit) {
    let sousTotalPeches = document.getElementById("sousTotalPeches");
    let sousTotalPoires = document.getElementById("sousTotalPoires");
    let sousTotalPommes = document.getElementById("sousTotalPommes");
    switch (fruit) {
        case "Peches":
            sousTotalPeches.innerHTML = parseInt(document.getElementById("prixPeches").innerText) * document.getElementById("nbPeches").value;
            break;
        case "Poires":
            sousTotalPoires.innerHTML = parseInt(document.getElementById("prixPoires").innerText) * document.getElementById("nbPoires").value;
            break;
        case "Pommes":
            sousTotalPommes.innerHTML = parseInt(document.getElementById("prixPommes").innerText) * document.getElementById("nbPommes").value;
            break;
    }
    document.getElementById("total").innerText = +sousTotalPeches.innerHTML + +sousTotalPommes.innerHTML + +sousTotalPoires.innerHTML;


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