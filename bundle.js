"use strict";

//Tenplate Literals
var nome = "Ricardo";
var idade = 19; //console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); // Object Short Syntax

var sobrenome = "Gutz";
var altura = 167;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: "Alternative Agência"
};
console.log(usuario);
