/* Funções */

function addNumber(x: number, y:number){
    return x+y;
}

let soma: number = addNumber(4,7);
console.log(soma)

//----------------------

function addToHello(name: string): string{
    return `Hello ${name}`;
}

console.log(addToHello("Natan"));

//----------------------

// função multi-tipos
function callToPhone(phone: number | string): number | string{
    return phone;
}

//----------------------

//função async, para esperar algo de uma Promise
async function getDataBase(id: number): Promise<string>{
    return "Natan";
}



