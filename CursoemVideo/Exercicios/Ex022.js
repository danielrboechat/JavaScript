let val = [8,1,7,4,2,9]

for(var pos = 0 ; pos < val.length ; pos++ ){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}

for(let pos in val){
    console.log(`A posição ${pos} tem o valor ${val[pos]}, mas agora na forma simplificada.`)
}

