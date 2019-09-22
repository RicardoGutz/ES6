/*import api from "./api";

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository]");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando..."));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) return;

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url }
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url
      });

      this.inputEl.value = "";

      this.render();
    } catch (err) {
      alert("ERRROU o nome do repositório");
    }

    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.setAttribute("href", repo.html_url);
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
*/

/*class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor() {
    super();

    this.admin = true;
  }
}

const Usuario1 = new Usuario("email@teste.com", "senha123");
const Admin1 = new Admin("email2@teste.com", "senha456");

console.log("Exercício 1: " + Usuario1.isAdmin()); // false
console.log("Exercício 1: " + Admin1.isAdmin()); // true

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

const idades = usuarios.map(function(usuario) {
  return usuario.idade;
});

console.log("Exercício 2.1: " + idades);

const resultado2 = usuarios.filter(function(usuario) {
  return usuario.empresa == "Rocketseat" && usuario.idade > 18;
});

console.log(resultado2);

const resultado3 = usuarios.find(function(usuario) {
  return usuario.empresa == "Google";
});

console.log("Exercício 2.3: " + resultado3);

const resultado4 = usuarios.map(function(usuario) {
  return usuario.idade * 2;
});

resultado4.filter(function(usuario) {
  return usuario.idade <= 50;
});

console.log("Exercício 2.4: " + resultado4);

const arr1 = [1, 2, 3, 4, 5];

/*const array = arr1.map(function(item) {
  return item + 10;
});

const array1 = arr1.map(item => {
  return item + 10;
});

console.log(array1);

const arr2 = { nome: "Diego", idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(arr2));

const dobraIdade = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log(dobraIdade);

//Exercício 3

const arr3 = [1, 2, 3, 4, 5];

arr3.map(item => item + 10);

console.log(arr3);

const usuario = { nome: "Ricardo", idade: 19 };

const mostrar = usuario => usuario.idade;

console.log(usuario);

const nome = "Ricardo";
const idade = 19;

const mostrarDeNovo = (nome, idade) => (nome, idade);

console.log(nome, idade);

//Exercício 4

const empresa = {
  nome: "Alternative Agência",
  endereco: {
    cidade: "Blumenau",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

const usuario = {
  nome: "Ricardo",
  idade: 19
};

const { nome, idade } = usuario;

function mostraInfo() {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo());

//Exercício 5

const arr4 = [1, 2, 3, 4, 5];

const [x, ...y] = arr4;

console.log(x);
console.log(y);

const arr5 = [2, 5, 7, 8];

const soma = total => total.reduce((total, next) => total + next);

console.log(soma(arr5));

const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Ricardo" };

console.log(usuario2);

const usuario3 = { ...usuario, cidade: "Blumenau" };

console.log(usuario3);

//Exercício 6

const usuario = "Ricardo";

const idade = 19;

console.log(`O usuário ${usuario} possui ${idade} anos de idade.`);

//Exercício 7

const nome = "Ricardo";

const idade = 19;

const usuario = {
  nome,
  idade,
  cidade: "Blumenau"
};

console.log(usuario);

//WebPack Challenges

import Usuario from "./functions";

import { info } from "./functions";

import idade from "./functions";

console.log(Usuario);

console.log(info());

console.log(idade);*/

//Async & Await Challenges

const delay = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mais 1 segundo");
    }, 1000);
  });

async function umPorSegundo() {
  console.log(await delay());
  console.log(await delay());
  console.log(await delay());
}

umPorSegundo();
