// Prática guiada

// Um objeto é uma variável seguido de propriedades.
// Ex: const variavel = {propriedades do objeto} seguindo o modelo abaixo.
// No caso abaixo nome: "Dhouglas" e os demais abaixo são as prioridades do objeto.
// O nome é a chave do objeto e o "Dhouglas" é o valor do objeto.
// Ex: 

const estudante = {
    nome: "Dhouglas",
    sobrenome: "Ornilo",
    numeroMatricula: 1597,
    notasDoSemestre: [9, 10]
}

// Para acessar uma propriedade do objeto utiliza-se objeto.propriedade ou objeto["propriedade)"]
// Ex:
console.log(estudante.nome)
console.log(estudante["sobrenome"])

// Ao tentar acessar uma propriedade não existente, ela será criada no objeto.
// objeto.propriedade (chave) não existente = valor da propriedade (chave) ou objeto["propriedade"]
// Ex:

estudante.modulo = "JavaScript"
console.log(estudante.modulo)
console.log(estudante["modulo"])

// Para acessar um elemento dentro de um array que está dentro de uma propriedade do objeto
// utiliza-se objeto.propriedade que tenha um array[posição do elemento do array] ou 
// objeto["propriedade que tenha um array"][posição do elemento do array] ou
// Para ver todas utiliza objeto.propriedade que tenha o array ou objeto [propriedade que tenha o array]
// Ex: 

console.log(estudante.notasDoSemestre[0]) /* ou */
console.log(estudante["notasDoSemestre"][1])
console.log(estudante.notasDoSemestre)

// Para copiar um objeto cria-se uma nova variável = {...nome do objeto} chamado (espalhamento)
// Para alterar o valor da propriedade da cópia, mudamos o valor da propriedade (chave)
// Para adicionar um valor a uma propriedade que tenha um array utiliza-se
// nome da propriedade: [...objeto.propriedade (chave), valor da propriedade]
// Ex:
const novoEstudante = {
    ...estudante,
    nome: "Jaciane",
    sobrenome: "Clementino",
    numeroMatricula: 1598,
    notasDoSemestre: [...estudante.notasDoSemestre, 9],
    modulo: "HTML"
}

console.log(estudante)
console.log(novoEstudante)

// Para adicionar objetos dentro de um array, deve-se criar uma nova variável (array) = []
// colocando array.push(objeto)
// Para acessar o objeto a escolha deve-se usar array.[posição do objeto no array]
// Para acessar a propriedade de um objeto a escolha deve-se usar
// array.[posição do objeto no array].propriedade do objeto.

const estudantesLabenu = []
estudantesLabenu.push(estudante)
estudantesLabenu.push(novoEstudante)

console.log(estudantesLabenu[0].nome)
console.log(estudantesLabenu[1].nome)

// Para criar um objeto que possui várias propriedades, onde uma deles pode ser um array
// E esse array pode conter vários objetos deve-se seguir o exemplo abaixo.
// Ex: 
const meuObjeto = {
    nome:"Dhouglas",
    idade: 27,
    carros: [
        {marca: "fiat", modelo:"uno"}, 
        {marca:"bmw", modelo:"x1"}, 
        {marca:"bmw", modelo:"x6"}
    ]
}

// Para acessar um objeto dentro do array da propriedade do objeto principal utiliza-se [posição]
// E para acessar a propriedade utiliza-se .nome da propriedade.
console.log(meuObjeto.carros[2].modelo)