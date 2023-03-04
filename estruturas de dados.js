// 1 - Criando um array que receba 5 itens e exiba no console

//let name = ["janeiro","fevereiro", "março", "abril", "dezembro"];
//console.log(name);

// 2 - Utilizando um metodo para adcionar um nome ao inicio do array
//let dia = ["segunda", "terça", "quarta"];
//console.log(dia);

//let addIci = dia.unshift("domingo");
//console.log(dia);


// 3 - Utilizando um metodo para remover o ultimo nome do array

//let alunos = ["maria", "joao", "pedro"];
//console.log(alunos);

//let reMovver = alunos.pop("pedro");
//console.log(alunos);


// 4 - Utilizando um metodo para adicionar dois nomes ao fim do array

//let amigos = ["ana", "issinha", "mimi"];
//console.log(amigos);

//let addFundo = amigos.push("vero", "vivi");
//console.log(amigos);


// 5 - Utilizando um metodo para remover o primeiro nome do array

//let num = [1, 2, 3,4,5];
//console.log(num);

//let eeRmo = num.shift(0);
//console.log(num);


// 6  - Utilizando um metodo para organizar em ordem crescente o seguinte array
// let numbers = [7,5,6,3,8,9,2,1,4]

//let numbers = [7,5,6,3,8,9,2,1,4];

//numbers.sort();
//console.log(numbers);


// 7 - Criando um objeto que receba ao menos tres propriedade sobre voce

//const mim = {
  //qualidade: //"atencioso",
  //como lido com a vida: //"calmo",
  //pessoal:// "estudioso"

//}
//console.log(mim);



// 8 - Adicionando uma nova propriedade sem alterar o objeto inicial

//const dia = {
  //semana1: "segunda",
  //semana2: "terça",
  //semana3: "qaurta"
//}
//console.log(dia);

//dia.semana0 = "domingo";
//console.log(dia);


// 9 - Removendo uma propriedade desse objeto


 //const amigos ={
  // amigo1: 2,
  // amigo2:3,
  // amigo4:9
 //}
 //console.log(amigos);

 //delete amigos.amigo1;
 //console.log(amigos);



// 10 - Mostrando no console todas as propriedades desse objeto

//let primos = {
  //primo1: "lucas",
  //primo2: "felipe",
  //primo3: "kaike",
  //primo4: "derick"
//}
//console.log(primos);


// 11 - Criando um array chamado "cadastro" contendo ao menos 5 objetos.


const cadastro = [
  {
    nome: "Rafael",
    idade: 22,
    telefone: 221183333,
    amigos: ("jonas","josefina", "josefa", "jermilinda", "juju")
  },

{
    nome: "Luis",
    idade: 21,
    telefone: 220092039,
    amigos:("ivo", "ivone","ivonete","ivan","iva")
},

{
 nome:"Veronica",
 idade: 22,
 telefone: 220014993,
 amigos: ("vitoria", "miguel","joao","marcio","alessandra")
},

{
  nome:"David",
  idade: 36,
  telefone: 446689022,
  amigos: ("marta","joana","joao","felicity","esmeralda")

},

{
  nome: "Miguel",
  idade: 3,
  telefone: 339910033,
  amigos:("riahna","taylor","martina","viletta","carla")
},
{
  nome:"tony",
  idade: 67,
  telefone: 330001832,
  amigos:("major","pablo","ludmila","barão","calipso")
}


];





// 12 - Mostrando no console o nome de um amigo de cada lista


const ids = cadastro.map(produto => produto.amigos);
console.log(ids)