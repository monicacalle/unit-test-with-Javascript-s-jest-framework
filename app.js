let oneEuroIs = { 
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}


 const fromDollarToYen =(amountInDolars)=> {      
    const amountInEuro = amountInDolars / oneEuroIs.USD 
    return amountInEuro * oneEuroIs.JPY
    
};

 const fromEuroToDollar =(amountInEuro)=> { 
    if(typeof amountInEuro !== 'number'){
        return 'Invalid field'
    } 
    
     return amountInEuro * oneEuroIs.USD
    
}

 const fromYenToPound =(amountInYen)=> {      
     const amountInEuro = amountInYen / oneEuroIs.JPY
return amountInEuro * oneEuroIs.GBP
    
};

module.exports = {
    fromDollarToYen,fromEuroToDollar,fromYenToPound
}