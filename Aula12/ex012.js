var agora =new Date() // Para pegar a hora exata
var hora = agora.getHours() // Para pegar a hora exata
console.log(`Agora São exatamente ${hora} horas.`)
if(hora >=6 && hora <= 12){
    console.log('Bom dia!')
}else if(hora>=13 && hora <= 18) {
    console.log('Boa tarde!')
}else if(hora>=19 && hora <= 24){
    console.log('Boa noite!')
}else if (hora >=1 || hora <= 5){
    console.log('Boa Madrugada!')
}