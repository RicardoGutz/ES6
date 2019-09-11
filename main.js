const arr = [1, 3, 4, 5, 8];

const newArr2 = arr.map(function(item) {
  return item * 2;
});

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: "Diego" });

console.log(teste());
