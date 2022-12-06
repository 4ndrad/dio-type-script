/* interfaces (type x interface) */

//type, tipa variaveis
type robot = {
    id: number | string;
    name: string;
};

const bot: robot = {
    id:1,
    name: "megatron"
}

console.log(bot)

//interface, usado para trabalhar com classes 
interface robot2{
    id: number | string;
    name: string;
}

const bot2: robot2 = {
    id:"1",
    name: "megatron"
}

console.log(bot2)