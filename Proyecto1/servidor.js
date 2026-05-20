console.log("Hola mundo Js Servidor")

console.time("miproceso")

for(let i = 0; i< 1000000; i++){}

console.timeEnd("miproceso")


let usuarios=[
    {nombre:"Alan", edad: 20},
    {nombre:"Luis", edad: 20},
];

console.table(usuarios)