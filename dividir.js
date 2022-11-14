function dividir(num1,num2){
   if(  Number(num1) === 0 || Number(num2) === 0 ){
    return "no se puede dividir por 0"     
}else{
    return num1/num2
}
}

module.exports = dividir;