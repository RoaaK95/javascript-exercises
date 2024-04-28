const fibonacci = function(num) {
   let number;
   if(typeof num !== 'number')
   {
    number= parseInt(num);
   }
   else 
   {
    number = num;
   }
   if(number<0) return "OOPS";
   
   const fibArray=[0,1];
   for(i=2;i<=number;i++)
   {
      fibArray[i]=fibArray[i-2]+fibArray[i-1];
   }
   return fibArray[number];
};

// Do not edit below this line
module.exports = fibonacci;
