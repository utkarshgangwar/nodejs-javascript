function armstrong(nums){
    let arr = nums.toString().split('');
    const length = arr.length;
    let sum = arr.reduce(
      (acc, value)=>
      acc + Math.pow(parseInt(value), length),0);
      
      if(sum===nums){
        console.log(nums + ' is an armstrong')
      }else{
         console.log(nums + ' is not an armstrong')
      }
}

armstrong(153);