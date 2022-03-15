var agora = new Date()
var mes = agora.getMonth()

/* 
    Para o JavaScript os meses são:

    0 = Janeiro
    1 = Fevereiro
    2 = Março
    3 = Abril
    4 = Maio
    5 = Junho
    6 = Julho
    7 = Agosto
    8 = Setembro
    9 = Outubro
    10 = Novembro
    11 = Dezembro
    
*/

console.log('O mês em que estamos é: ')

switch (mes){
    case 0:
        console.log('Janeiro')
        break
    case 1: 
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9:
        console.log('Outubro')
        break
    case 10:
        console.log('Novembro')
        break
    case 11:
        console.log('Dezembro')
    default:
        console.log('[ERRO], mês Inválido!!')
}