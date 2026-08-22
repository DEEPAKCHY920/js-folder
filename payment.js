 const payment = new Promise(function(resolve, reject){
    const paymentstatuts= true; 
    if(paymentstatuts){
        resolve("payment success")
    }
    else{
        reject("payment failed")
    }
 }) 
//  console.log("status of payment", payment);
//  payment
 
payment.then ((result)=>{
    console.log(result);
    
})


.catch ((error)=>{
    console.log(error);
    
})
    