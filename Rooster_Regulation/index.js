const Calculate = {
    factorial(num){
      if(num===0){
        return 0;
      }
      let fact=1;
      for(let i=1;i<=num;i++){
        fact*=i;
      }
      return fact;
    }
  }
  
  module.exports = Calculate;
  