"use strict";

var usuario = {
  nome: "Ricardo",
  idade: 19,
  endereco: {
    cidade: "Blumenau",
    estado: "SC"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
