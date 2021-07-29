function numberToCurrenty(number){
    return number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export{
    numberToCurrenty
}