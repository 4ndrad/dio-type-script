"use strict";
/* Generics */
// os três pontos significa que aceita varios itens               
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["item1", "item2"], ["item3"]);
console.log(numArray);
console.log(stgArray);
