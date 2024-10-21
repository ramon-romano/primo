function primo(numero){
    if(numero < 2){
      return('Este numero não é um numero primo!')
    }
  
    for(let i = 2; i < numero;i++){
      if(numero % i === 0){
        return('Este numero não é um numero primo')
      }
    }
  
    return(`Uhuuu, ${numero} é um numero primo`)
  }
  
  
  console.log(primo(11))