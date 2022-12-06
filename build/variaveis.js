"use strict";
/* Variaveis */
// tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Natan";
let idade = 20;
let altura = 1.81;
// tipos especiais: null e undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any e void
let retorno;
let retornoView; //aceita qualquer coisa
//objeto - sem previsibilidade
let produto = {
    nome: "Natan",
    idade: 20,
    altura: 1.81
};
let meuProduto = {
    nome: "Caderno",
    preco: 15,
    unidades: 50
};
/* Arrays */
let dados = ["Natan", "Marcelo", "Eric"];
let dados2 = ["Natan", "Marcelo", "Eric"];
// array multi types
let infos = ["Natan", 20];
/* Tuplas */
// tem que colocar os elementos na ordem declarada.
let boleto = ["agua conta", 150, 1616664];
/* Arrays métodos*/
//Todos os metodos doe Array JS Funciona no TS
/* Datas */
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
