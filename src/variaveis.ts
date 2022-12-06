/* Variaveis */

// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Natan";
let idade: number = 20;
let altura: number = 1.81;

// tipos especiais: null e undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any e void
let retorno: void;
let retornoView: any;   //aceita qualquer coisa

//objeto - sem previsibilidade
let produto: object = {
    nome: "Natan",
    idade: 20,
    altura: 1.81
};

// objeto dinâmico
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome:"Caderno",
    preco: 15,
    unidades: 50
}

/* Arrays */

let dados: string[] = ["Natan", "Marcelo", "Eric"];
let dados2: Array<string> =  ["Natan", "Marcelo", "Eric"];

// array multi types
let infos: (string | number) [] = ["Natan", 20];

/* Tuplas */

// tem que colocar os elementos na ordem declarada.
let boleto:[string, number, number] = ["agua conta", 150, 1616664];


/* Arrays métodos*/
//Todos os metodos doe Array JS Funciona no TS

/* Datas */

let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString());