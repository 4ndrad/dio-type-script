/* Generics */
// os três pontos significa que aceita varios itens               
function concatArray<T>(...itens: T[]): T[]{     //o segundo "T" (generico) é o tipo do retorno
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(["item1", "item2"],["item3"])

console.log(numArray);
console.log(stgArray);