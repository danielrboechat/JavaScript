let num = [5,80,2,700,9,35]

console.log(`O nosso vetor é o ${num}`)
console.log(num)
console.log(num[1])
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`)

num.push(45)
console.log(num)

num.sort()
console.log(num)

let pos = num.indexOf(7)
if (pos==-1){
    console.log('Valor não encontrado')
}
else{
    console.log(`O valor está na posição ${pos}`)
}