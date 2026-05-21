//isso aqui é um comentário

/**
 * Este é um
 * comentário de
 * múltipas linhas
 */

var nome ;
let data_nascimento = "2009-02-27"
 //const CPF = 0000000000;

 let num1 = 2;
 let num2 = 5;

 let soma = num1 + num2;

 console.log(soma);

// conectivo lógico? E OU NÂO
// AND OR NOT - && || !

if (!nome){
    console.log("Não está preenchido")
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
 /**
  * pega o elemento input que recebe o nome através
  * do id.
  */
    const name = document.getElementById("name").value;
    const button = form.querySelector("button");
    button.disabled = true;
    button.textContent = "criando usuario ...."
    console.log(name)
});