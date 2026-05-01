
function fib(n:number):number {
let a = 0
let b = 1
    for(let i = 0; i < n; i++){
        let r = a + b
        a = b
        b = r
     }
     return a;
}
console.log(fib)

        

console.time('fib')
console.log()
console.timeEnd('fib')//*
