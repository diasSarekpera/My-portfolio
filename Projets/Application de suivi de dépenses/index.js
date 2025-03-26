//Récupération des éléments du DOM
const addT = document.getElementById("add");
const amount = document.getElementById("amount");
const currentFund = document.getElementById("funds");
const allTransaction = document.getElementById("list-transaction");
const transactionType = document.getElementById("transaction-type");
const transactionDescription = document.getElementById("description");
const Reset = document.getElementById("resetBtn");
const Ctg = document.getElementById("category");
const lit = document.getElementById("Trans");

//Variables
let baseFund = 0;
let currentFundValue = 0;
let savedF = 0;
let savedD = "";
let length = 0;

loadProgressF();
clrCF();

function addTransaction() {
    if (!transactionDescription.value || !amount.value || Number(amount.value) <= 0) {
        alert("Entrez une description et un montant valide");
        transactionDescription.value = "";
        amount.value = "";
    }else{
        if (transactionType.value === "Revenu") {
            if (isNaN(Number(amount.value)) || Number(amount.value) <= 0) {
                alert("Le montant doit être un nombre positif !");
            }else{
                currentFundValue = Number(currentFundValue) + Number(amount.value);
                //savingProgressF();
            }  
        } else if (transactionType.value === "Depense") {
            if (isNaN(Number(amount.value)) || Number(amount.value) <= 0) {
                alert("Le montant doit être un nombre positif !");
            }else{
                currentFundValue = Number(currentFundValue) - Number(amount.value);
                savingProgressF();
            }
        }
        //completTransactionList();
        savingProgressF();
    }
    
    clrCF();

    transactionDescription.value = "";
    amount.value = "";
}

/*function completTransactionList() {
    const li = document.createElement("li");
    li.textContent = `${transactionType.value} : ${transactionDescription.value}  ${amount.value} FCFA - ${Ctg.value}  `;
    li.classList.add(transactionType.value === "Revenu" ? "revenu" : "depense");
    lit.appendChild(li);
}*/

//Formatage du solde
function formatAmount(amount) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', minimumFractionDigits: 0 }).format(amount);
}

function clrCF(){
    currentFund.classList.remove("red", "green");
    if(currentFundValue < 0){
        currentFund.classList.add("red");
        currentFund.textContent = "Solde actuel : " + formatAmount(currentFundValue);
    }else if(currentFundValue > 0){
        currentFund.classList.add("green");
        currentFund.textContent = "Solde actuel : " + formatAmount(currentFundValue);
    }
    currentFund.textContent = "Solde actuel : " + formatAmount(currentFundValue);
}

function savingProgressF(){
    //const transactions = Array.from(lit.children).map(li => li.textContent);
    //localStorage.setItem("transaction", JSON.stringify(transactions));
    localStorage.setItem("currentFV", JSON.stringify(currentFundValue));
}

function loadProgressF(){
    savedF = localStorage.getItem("currentFV");
    //const savedTransaction = JSON.parse(localStorage.getItem("transaction"));

    if(savedF){
        savedF = JSON.parse(savedF);
        currentFundValue = Number(savedF);
    }else{
        currentFundValue = 0;
    }

    /*if(savedTransaction){
        savedTransaction.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = transaction;
            lit.appendChild(li);
        });
    }*/
}

addT.addEventListener("click", addTransaction);

Reset.addEventListener("click", () => {
    currentFundValue = 0;
    localStorage.clear();
    /*while (lit.firstChild) {
        lit.removeChild(lit.firstChild); // Supprime chaque élément enfant
    }*/
    clrCF();
});
