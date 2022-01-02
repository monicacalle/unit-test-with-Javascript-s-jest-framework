const { fromEuroToDollar } = require('./app.js')


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const result = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(result).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("should", function(){
    const result = fromEuroToDollar('some_string') 

    expect(result).toBe('Invalid field'); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})