const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    
    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 127.9 yens", function(){
    
    const yens = fromDollarToYen(3.5)

    const expected = 3.5 * 127.9; 
    
     expect(yens).toBe(expected); //1 dollar are 127.9 yenes, then 3.5 dollars should be = (3.5 * 127.9)
});

test("One yen should be 0.8 pounds", function(){
    
    const pounds = fromYenToPound(3.5)

    const expected = 3.5 * 0.8; 
    
     expect(pounds).toBe(expected); //1 yen are 0.8 pounds, then 3.5 yens should be = (3.5 * 0.8)
});


