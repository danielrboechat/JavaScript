let v = function(x){
    return 2*x
}

console.log(v(5))

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c // fator multiplicador, começa com 1 depois do for vai pra 5x1=5, depois 5x4 e assim vai
    }
    return fat
}

console.log(fatorial(-5))